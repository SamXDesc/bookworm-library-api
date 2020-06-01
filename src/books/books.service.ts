import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { IBook } from './book.interface';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';


@Injectable()
export class BooksService {
  constructor (@InjectModel('Book') private bookModel: Model<IBook>) {}

  async retrieve (): Promise<IBook[]> {
    return await this.bookModel.find();
  }

  async retrieveOne (id: Schema.Types.ObjectId): Promise<IBook> {
    const book = await this.bookModel.findById(id)

    if (!book) {
      throw new NotFoundException('Book not found.')
    }

    return book
  }

  async create (createBookDto: CreateBookDto): Promise<IBook> {
    const book: IBook = new this.bookModel({
      ...createBookDto
    })

    return await book.save()
  }

  async update (id: Schema.Types.ObjectId, updateBookDto: UpdateBookDto): Promise<IBook> {
    const book = await this.bookModel.findById(id)

    return await book.update(updateBookDto)
  }

  async remove (id): Promise<any> {
    return await this.bookModel.findByIdAndRemove(id)
  }
}
