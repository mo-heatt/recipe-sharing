import { Component } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';

@Component({
  selector: 'app-home-page',
  imports: [RecipeCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
