import { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  readonly title: string,
  readonly categories: [],
  readonly author: Schema.Types.ObjectId,
  readonly pages: number
}
