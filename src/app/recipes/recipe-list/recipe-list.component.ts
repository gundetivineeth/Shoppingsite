import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe("A Test Recipe 1","A Test Description Recipe 1","https://www.theseasonedmom.com/wp-content/uploads/2019/07/Cheesy-Ground-Beef-Pasta-Chuckwagon-Mac-8.jpg"),
    new Recipe("A Test Recipe 2","A Test Description Recipe 2","https://www.theseasonedmom.com/wp-content/uploads/2019/07/Cheesy-Ground-Beef-Pasta-Chuckwagon-Mac-8.jpg"),
    new Recipe("A Test Recipe 3","A Test Description Recipe 3","https://www.theseasonedmom.com/wp-content/uploads/2019/07/Cheesy-Ground-Beef-Pasta-Chuckwagon-Mac-8.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
