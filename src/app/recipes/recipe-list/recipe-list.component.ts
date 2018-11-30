import { Component, OnInit } from '@angular/core';
 
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A test Recipe','This is simply teste','https://www.google.co.in/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjc7OL1wvveAhUH57wKHVrSApwQjRx6BAgBEAU&url=http%3A%2F%2Fwww.hellthyjunkfood.com%2Fpizzaburgerpizza%2F&psig=AOvVaw01JKrOV9KheGXBW9QZDsm_&ust=1543646887886091')
  ];
  constructor() { }

  ngOnInit() {
  }

}
