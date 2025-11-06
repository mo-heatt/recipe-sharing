import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl = 'http://localhost:5454';

  constructor(private http: HttpClient){}

  recipeSubject = new BehaviorSubject<any>({
    recipes:[],
    loading:false,
    newRecipe:null
  });

  private getHeaders():HttpHeaders{
    const token = localStorage.getItem('jwt');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  }

  getRecipes(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.baseUrl}/api/recipes`, { headers }).pipe(
      tap((recipes: any) => {
        const currentState = this.recipeSubject.value;
        this.recipeSubject.next({ ...currentState, recipes });
      })
    );
  }

  createRecipe(recipeData:any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.baseUrl}/api/recipes`,recipeData,{ headers }).pipe(
      tap((newRecipe) => {
        const currentState = this.recipeSubject.value;
        this.recipeSubject.next({ ...currentState, recipes: [...currentState.recipes, newRecipe], newRecipe });
      })
    );
  }

  updateRecipe(recipeData:any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put<any>(`${this.baseUrl}/api/recipes`,recipeData,{ headers }).pipe(
      tap((updatedRecipe) => {
        const currentState = this.recipeSubject.value;
        const updatedRecipes = currentState.recipes.map((recipe:any) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        );
        this.recipeSubject.next({ ...currentState, recipes: updatedRecipes });
      })
    );
  }

  deleteRecipe(id:any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete<any>(`${this.baseUrl}/api/recipes/${id}`,{ headers }).pipe(
      tap((deletedRecipe: any) => {
        const currentState = this.recipeSubject.value;
        const filteredRecipes = currentState.recipes.filter((recipe:any) => recipe.id !== id);
        this.recipeSubject.next({ ...currentState, recipes: filteredRecipes });
      })
    );
  }

  likeRecipe(id:any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put<any>(`${this.baseUrl}/api/recipes/${id}/like`,{ headers }).pipe(
      tap((updatedRecipe:any) => {
        const currentState = this.recipeSubject.value;
        const updatedRecipes = currentState.recipes.map((recipe:any) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        );
        this.recipeSubject.next({ ...currentState, recipes: updatedRecipes });
      })
    );
  }
}
