import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RecipeService } from '../../services/Recipe/recipe-service';

@Component({
  selector: 'app-create-recipe-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './create-recipe-form.html',
  styleUrls: ['./create-recipe-form.scss'],
})
export class CreateRecipeForm {
  recipeItem = {
    title: '',
    description: '',
    foodType: '',
    image: ''
  };

  constructor(private recipeService: RecipeService){}

  onSubmit() {
    console.log('values', this.recipeItem);
    this.recipeService.createRecipe(this.recipeItem).subscribe(
      {
        next: data=>console.log('Recipe created successfully', data),
        error: err=>console.error('Error creating recipe', err)
      }
    )
  }
}
