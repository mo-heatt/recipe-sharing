import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UpdateRecipeForm } from '../update-recipe-form/update-recipe-form';
import { RecipeService } from '../../services/Recipe/recipe-service';

@Component({
  selector: 'app-recipe-card',
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {

  @Input() recipe:any

  constructor(public dialog: MatDialog, private recipeService: RecipeService){}

  handleOpenEditRecipeDialog(){
    this.dialog.open(UpdateRecipeForm,{
      data: this.recipe
    });
  }

  handleDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe.id).subscribe()
  }
}
