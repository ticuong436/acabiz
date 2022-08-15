
import { Injectable } from '@nestjs/common'
import { PrismaClient, Todo, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class TodolistService {
  public getTodoList(): Promise<Todo[]> {
    return prisma.todo.findMany()
  }
  public createTodoList(data: Prisma.TodoCreateInput): Promise<Todo> {
    return prisma.todo.create({
      data: data
    })
  }
  public updateTodolist(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }): Promise<Todo> {
    const { data, where } = params;
    return prisma.todo.update({
      data,
      where,
    });
  }
  public deleteTodolist(where: Prisma.TodoWhereUniqueInput): Promise<Todo>{
    return prisma.todo.delete({
      where,
    });
  }

}