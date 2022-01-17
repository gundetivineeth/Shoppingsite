import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

 private recipes:Recipe[] = [
    new Recipe("A Test Recipe 1",
    "A Test Description Recipe 1",
    "https://www.theseasonedmom.com/wp-content/uploads/2019/07/Cheesy-Ground-Beef-Pasta-Chuckwagon-Mac-8.jpg",
    [new Ingredient("Bread",3),new Ingredient("Butter",5)]),
    new Recipe("A Test Recipe 2",
    "A Test Description Recipe 2",
    "https://www.theseasonedmom.com/wp-content/uploads/2019/07/Cheesy-Ground-Beef-Pasta-Chuckwagon-Mac-8.jpg",
    [new Ingredient("Meat",1),new Ingredient("Masala",1)]),
    new Recipe("A Test Recipe 3",
    "A Test Description Recipe 3",
    "https://www.theseasonedmom.com/wp-content/uploads/2019/07/Cheesy-Ground-Beef-Pasta-Chuckwagon-Mac-8.jpg",
    [new Ingredient("Chocloate",3),new Ingredient("Butter",5)])
  ];
  
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

 getRecipes(){
   return this.recipes.slice();
 }

}
