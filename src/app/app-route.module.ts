import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { Recipe } from "./recipes/recipe.model";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoute: Routes = [
    {path:'',component: RecipesComponent},
    {path:'recipes',component:RecipesComponent , children:[
    {path:"new",component:RecipeEditComponent},
    {path:":id", component:RecipeItemComponent},
    {path:":id/edit", component:RecipeEditComponent}
    ]},
    {path:'shoppinglist',component:ShoppingListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]

})
export class AppRouteModule{
  
}

