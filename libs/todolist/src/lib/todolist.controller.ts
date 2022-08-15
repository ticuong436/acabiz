import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { TodolistService } from './todolist.service';

@Controller('todolist')
export class TodolistController {
  constructor(private todolistService: TodolistService) {}
  @Get()
  public getTodolist() {
    return this.todolistService.getTodoList()
  }
  @Post()
  public postTodolist(@Body() data: {name: string, description:string}): Promise<Todo> {
    return this.todolistService.createTodoList(data)
  }
  @Patch('/:id')
  public updateTodolist(@Body() data: {id:string, name: string, description:string}){
    return this.todolistService.updateTodolist({
      where:{id: data.id},
      data: data
    })
  }
  @Delete('/:id')
  public deleteTodolist(@Param('id') id:string):Promise<Todo>{
    return this.todolistService.deleteTodolist({ id: String(id) });

  }
}
