import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { IBook } from './book.interface';
import { BooksService } from './books.service';
import { Schema } from 'mongoose';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import FilterDto from './dtos/filter.dto';

@Controller('books')
export class BooksController {
  constructor (private readonly service: BooksService) {}

  @Get()
  async index (@Query() filters: FilterDto): Promise<IBook[]> {
    return await this.service.retrieve(filters)
  }

  @Get(':id')
  async show (@Param('id') id: Schema.Types.ObjectId): Promise<IBook> {
    return await this.service.retrieveOne(id)
  }

  @Post()
  async store (@Body() createBookDto: CreateBookDto): Promise<IBook> {
    return await this.service.create(createBookDto)
  }

  @Patch(':id')
  async update (@Param('id') id: Schema.Types.ObjectId, @Body() updateBookDto: UpdateBookDto): Promise<IBook> {
    return await this.service.update(id, updateBookDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Schema.Types.ObjectId): Promise<any> {
    return await this.service.remove(id)
  }
}
