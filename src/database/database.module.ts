import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { BooksModule } from 'src/books/books.module';
import { AuthorsModule } from 'src/authors/authors.module';

@Module({
  imports: [
    BooksModule,
    AuthorsModule
  ],
  controllers: [DatabaseController],
  providers: [DatabaseService]
})
export class DatabaseModule {}
