import { Component, OnInit } from '@angular/core';
 
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A test Recipe','This is simply teste','https://cdn.pixabay.com/photo/2015/09/20/15/02/pizza-burger-948403_960_720.jpg'),
    new Recipe('second Recipe','this is aswaome','https://upload.wikimedia.org/wikipedia/commons/1/12/Chivito_al_pan_uruguayo.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
