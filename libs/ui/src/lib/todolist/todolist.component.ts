import { Component, OnInit } from '@angular/core';
import { Todo } from '@prisma/client';
import { TodolistService } from '../todolist.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'myorg-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  TodoList: Todo[] = [];
  todoForm!: FormGroup ;
  id!: string
  constructor(
    public todolistService: TodolistService,
    private fb: FormBuilder
  ) {}
  removeItem(item:Todo){
    this.todolistService.deleteTodoList(item.id).subscribe(res=> alert('Xóa thành công'))
    
  }
  selectItem(item:Todo){
    this.todoForm.get('name')?.setValue(item.name)
    this.todoForm.get('description')?.setValue(item.description)
    this.todoForm.addControl('id', new FormControl(''))
    this.todoForm.get('id')?.setValue(item.id)
  }
  updateTodolist(){
    this.todolistService.updateTodoList(this.todoForm.value).subscribe(res=> alert('Update thành công'))
  }
  postTodolist() {
    this.todoForm.removeControl('id')
    this.todolistService.postTodoList(this.todoForm.value).subscribe(res=> alert('Tạo thành công'));
  }
  ngOnInit(): void {
    this.todolistService
      .getTodoList()
      .subscribe((res) => (this.TodoList = res));
    this.todoForm = this.fb.group({
      name: [''],
      description: [''],
    });
  }
}
