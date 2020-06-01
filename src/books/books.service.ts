import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { IBook } from './book.interface';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import FilterDto from './dtos/filter.dto';


@Injectable()
export class BooksService {
  constructor (@InjectModel('Book') private bookModel: Model<IBook>) {}

  async retrieve (filters: FilterDto): Promise<IBook[]> {
    return await this.bookModel.find({ ...filters });
  }

  async retrieveOne (id: Schema.Types.ObjectId): Promise<IBook> {
    const book = await this.bookModel.findById(id)

    if (!book) {
      throw new NotFoundException('Book not found.')
    }

    return book
  }

  async create (createBookDto: CreateBookDto): Promise<IBook> {
    console.log(createBookDto)

    const book: IBook = new this.bookModel({
      ...createBookDto
    })

    const saved = await book.save()

    console.log('SAVED:', saved)

    return saved
  }

  async update (id: Schema.Types.ObjectId, updateBookDto: UpdateBookDto): Promise<IBook> {
    const book = await this.bookModel.findById(id)

    return await book.update(updateBookDto)
  }

  async remove (id): Promise<any> {
    return await this.bookModel.findByIdAndRemove(id)
  }
}
