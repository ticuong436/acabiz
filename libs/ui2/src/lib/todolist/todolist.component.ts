import { Component, OnInit } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  state: string;
}
@Component({
  selector: 'myorg-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
 
  ngOnInit(): void {}
}
