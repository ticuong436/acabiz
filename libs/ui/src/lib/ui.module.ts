import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {MyLibModule} from '@my-org/my-lib'
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MyLibModule],
  declarations: [ProductsComponent, TodolistComponent, HeaderComponent],
  exports: [ProductsComponent, TodolistComponent,HeaderComponent],
})
export class UiModule {}
