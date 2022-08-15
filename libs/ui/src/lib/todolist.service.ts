import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@prisma/client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private API_URL: string = 'http://localhost:3333/api';

  constructor(private readonly http: HttpClient) {}

  public getTodoList(): Observable<Todo[]> {
    {
      return this.http.get<Todo[]>(`${this.API_URL}/todolist`);
    }
  }
  public postTodoList(data: any): Observable<any> {
    console.log(data);

    return this.http.post<any>(`${this.API_URL}/todolist`, data);
  }
  public deleteTodoList(id: String): Observable<String> {
    return this.http.delete<string>(`${this.API_URL}/todolist/${id}`);
  }
  public updateTodoList(data: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.API_URL}/todolist/${data.id}`,data);
  }
}
