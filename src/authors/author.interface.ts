import { Document } from 'mongoose';

export interface IAuthor extends Document {
  readonly name: string
  readonly lastname: string
  readonly abbreviation: string
}
