import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipesService:RecipesService) { }

  ngOnInit(): void {
  }

  recipes = this.recipesService.getRecipes();

  onRecipeSelected(recipe:Recipe){
    this.recipesService.recipeSelected.emit(recipe);
  }

}
