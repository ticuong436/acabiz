import { Test } from '@nestjs/testing';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';

describe('TodolistController', () => {
  let controller: TodolistController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TodolistService],
      controllers: [TodolistController],
    }).compile();

    controller = module.get(TodolistController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
