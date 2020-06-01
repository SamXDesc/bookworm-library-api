import { Schema } from "mongoose"

export class CreateBookDto {
  readonly title: string
  readonly description: string
  readonly categories: string[]
  readonly author: Schema.Types.ObjectId
  readonly pages: number
}
