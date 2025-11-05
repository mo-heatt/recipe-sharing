import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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

  onSubmit() {
    console.log('values', this.recipeItem);
  }
}
