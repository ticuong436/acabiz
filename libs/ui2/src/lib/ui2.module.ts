import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MyLibModule } from '@my-org/my-lib';
import { TodosComponent } from './todos/todos.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, MyLibModule],
  declarations: [
    HeaderComponent,
    TodosComponent,
    TodolistComponent,
    FooterComponent,
  ],
})
export class Ui2Module {}
