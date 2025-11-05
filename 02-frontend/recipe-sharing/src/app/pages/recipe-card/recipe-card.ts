import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UpdateRecipeForm } from '../update-recipe-form/update-recipe-form';

@Component({
  selector: 'app-recipe-card',
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {
  constructor(public dialog: MatDialog){}

  handleOpenEditRecipeDialog(){
    this.dialog.open(UpdateRecipeForm);
  }
}
