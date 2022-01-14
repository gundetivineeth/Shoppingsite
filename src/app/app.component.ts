import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingSite';
  isRecipe:boolean = true;
  isShopping:boolean = false;

  onRecipeClicks(recipeData:{recipe:boolean,shopping:boolean}){
    this.isRecipe = recipeData.recipe;
    this.isShopping = recipeData.shopping;
  }
  onShoppingListClick(ShoppingData:{recipe:boolean,shopping:boolean}){
    this.isRecipe = ShoppingData.recipe;
    this.isShopping = ShoppingData.shopping;
  }
}
