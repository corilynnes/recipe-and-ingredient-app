import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe('A test', 'just a test', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=1920%2C1080&ssl=1'),
        new Recipe('Yum', 'Yum Yum', 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg')
      ];       

      getRecipes(){
          return this.recipes.slice();
      }
}