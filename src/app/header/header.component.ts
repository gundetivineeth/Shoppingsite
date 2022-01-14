import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  @Output() recipe = new EventEmitter<{recipe:boolean,shopping:boolean}>();
  @Output() shopping = new EventEmitter<{recipe:boolean,shopping:boolean}>();

  ngOnInit(): void {
  }

  onRecipeClick(){
    this.recipe.emit({
      recipe:true,
      shopping:false});
  }
  onShoppingClick(){
    this.shopping.emit({
      recipe:false,
      shopping:true});
  }
}
