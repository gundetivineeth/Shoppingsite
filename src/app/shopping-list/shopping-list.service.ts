import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private allIngredients: Ingredient[] = [
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];

  newItem = new EventEmitter<Ingredient[]>();

  constructor() { }

  onAddingShoppingItem(ingredent:Ingredient){
    this.allIngredients.push(ingredent);
    this.newItem.emit(this.allIngredients.slice());

  }

  getShoppingList(){
    return this.allIngredients.slice();

  }

  addArrayOfShoppingListItems(ingredent:Ingredient[]){
    this.allIngredients.push(...ingredent);
    this.newItem.emit(this.allIngredients.slice());
  }
}
