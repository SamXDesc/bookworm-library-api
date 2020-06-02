import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorSchema } from './author.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }])
  ],

  controllers: [
    AuthorsController
  ],

  providers: [
    AuthorsService
  ],

  exports: [
    AuthorsService
  ]
})
export class AuthorsModule {}
