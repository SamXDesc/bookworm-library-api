import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsModule } from './authors/authors.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/bookworm'),
    BooksModule,
    AuthorsModule,
    DatabaseModule,
  ]
})
export class AppModule {}
