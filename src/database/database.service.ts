import { Injectable } from '@nestjs/common';
import { BooksService } from 'src/books/books.service';
import { AuthorsService } from 'src/authors/authors.service';
import { readFileSync } from 'fs';

@Injectable()
export class DatabaseService {
  constructor (
    private readonly booksService: BooksService,
    private readonly authorsService: AuthorsService,
  ) {}

  async populate () {
    const data: any = readFileSync('src/database/data/authors-n-books.json', {
      encoding: 'utf-8'
    })

    JSON.parse(data).forEach(async author => {
      const { name, lastname, abbreviation, books } = author

      const createdAuthor = await this.authorsService.create({
        name,
        lastname,
        abbreviation
      })

      books.map(book => {
        book.author = createdAuthor._id

        return book
      })

      await this.booksService.bulkInsert(books)
    })

    return {
      message: 'All inserted with success'
    }
  }
}
