import { Controller, Get, Post, Body, Delete, Patch, Param } from '@nestjs/common';
import { Schema } from 'mongoose';
import { AuthorsService } from './authors.service';
import { IAuthor } from './author.interface';
import { AuthorsCreateDto } from './dtos/authors-create.dto';
import { AuthorsUpdateDto } from './dtos/authors-update.dto';

@Controller('authors')
export class AuthorsController {
  constructor (readonly service: AuthorsService) {}

  @Get()
  async index (): Promise<IAuthor[]> {
    return await this.service.retrieve()
  }

  @Get(':id')
  async show (@Param('id') id: Schema.Types.ObjectId): Promise<IAuthor> {
    console.log('HELP! HELP! I\'M BEING REPRESSED!');

    return await this.service.retrieveOne(id)
  }

  @Post()
  async store (@Body() authorsCreateDto: AuthorsCreateDto): Promise<IAuthor> {
    return await this.service.create(authorsCreateDto)
  }

  @Patch(':id')
  async update (@Param('id') id: Schema.Types.ObjectId, @Body() authorsUpdateDto: AuthorsUpdateDto): Promise<IAuthor> {
    return await this.service.update(id, authorsUpdateDto)
  }

  @Delete(':id')
  async remove (@Param('id') id: Schema.Types.ObjectId): Promise<any> {
    return await this.service.remove(id)
  }
}
