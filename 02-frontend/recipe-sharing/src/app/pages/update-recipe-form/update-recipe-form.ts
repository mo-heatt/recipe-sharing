import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    title: '',
    description: '',
    foodType: '',
    image: ''
  };

  onUpdate() {
    console.log('Updated values', this.recipeItem);
  }
}
