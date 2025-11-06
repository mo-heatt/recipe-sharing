import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/Recipe/recipe-service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-recipe-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-recipe-form.html',
  styleUrls: ['./update-recipe-form.scss'],
})

export class UpdateRecipeForm {
  // Recipe object
  recipeItem = {
    id: '',
    title: '',
    description: '',
    foodType: '',
    image: ''
  };

  constructor(@Inject(MAT_DIALOG_DATA) public recipe: any,private recipeService:RecipeService){}

  onUpdate() {
    this.recipeService.updateRecipe(this.recipeItem).subscribe({
      next: data=>console.log("Updated data successfully",data),
      error: err=>console.log("Error while updating the recipe",err)
    });
    console.log('Values', this.recipeItem);
  }

  ngOnInit() {
    this.recipeItem = this.recipe;
  }
}
