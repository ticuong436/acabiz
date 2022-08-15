import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController, ProductsService } from '@myorg/products'
import {TodolistController, TodolistService} from '@myorg/todolist'
@Module({
  imports: [],
  controllers: [AppController,ProductsController, TodolistController],
  providers: [AppService,ProductsService, TodolistService],
})
export class AppModule {}
