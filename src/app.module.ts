import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/bookworm'),
    BooksModule,
    AuthorsModule
  ]
})
export class AppModule {}
