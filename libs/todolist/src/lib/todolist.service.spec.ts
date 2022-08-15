import { Test } from '@nestjs/testing';
import { TodolistService } from './todolist.service';

describe('TodolistService', () => {
  let service: TodolistService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TodolistService],
    }).compile();

    service = module.get(TodolistService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
