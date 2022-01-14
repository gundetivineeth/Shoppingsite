import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<void>();
  @Input() recipe;
  constructor() { }

  ngOnInit(): void {
  }

  OnRecipeItemClicked(){
    this.selectedRecipe.emit();
  }

}
