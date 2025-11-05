import { Component } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeForm } from '../create-recipe-form/create-recipe-form';

@Component({
  selector: 'app-home-page',
  imports: [RecipeCard,MatIconModule,MatButtonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  recipes = [1,1,1,1,11,1]

  constructor(public dialog: MatDialog) {}

  handleOpenCreateRecipeForm(){
    this.dialog.open(CreateRecipeForm);
  }
}
