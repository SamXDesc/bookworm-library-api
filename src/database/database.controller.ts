import { Controller, Post } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor (
    private readonly service: DatabaseService
  ) {}

  @Post('/bulk')
  async store () {
    return await this.service.populate()
  }
}
