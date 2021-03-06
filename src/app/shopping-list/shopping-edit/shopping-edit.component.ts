import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputSelected: ElementRef;
  @ViewChild('amountInput') amountInputSelected: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>(); 
  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    const nameIng = this.nameInputSelected.nativeElement.value;
    const amountIng = this.amountInputSelected.nativeElement.value;
    const newIng = new Ingredient(nameIng, amountIng);
    this.ingredientAdded.emit(newIng);
  }

}
