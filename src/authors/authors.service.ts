import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IAuthor } from './author.interface';
import { Model, Schema } from 'mongoose';
import { AuthorsCreateDto } from './dtos/authors-create.dto';
import { AuthorsUpdateDto } from './dtos/authors-update.dto';

@Injectable()
export class AuthorsService {
  constructor (@InjectModel('Author') private authorsModel: Model<IAuthor>) {}

  async retrieve (): Promise<IAuthor[]> {
    return await this.authorsModel.find();
  }

  async retrieveOne (id: Schema.Types.ObjectId) {
    const author = await this.authorsModel.findById(id)

    if (!author) {
      throw new NotFoundException('Author not found.')
    }

    return author
  }

  async create (authorsCreateDto: AuthorsCreateDto): Promise<IAuthor> {
    const author: IAuthor = new this.authorsModel({
      ...authorsCreateDto
    })

    return await author.save()
  }

  async retrieveByIds (authors: Schema.Types.ObjectId[]): Promise<IAuthor[]> {
    return await this.authorsModel.find({ _id: {
      $in: authors
    }})
  }

  async update (id: Schema.Types.ObjectId, payload: AuthorsUpdateDto): Promise<IAuthor> {
    return await this.authorsModel.findByIdAndUpdate(id, payload)
  }

  async remove (id): Promise<any> {
    return await this.authorsModel.findByIdAndRemove(id)
  }
}
