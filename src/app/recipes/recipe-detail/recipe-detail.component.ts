import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private reciepeService: RecipeService) { }

  ngOnInit(): void {
  }
  onAddToShoppingList() {
    this.reciepeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }


}
