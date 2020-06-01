import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  categories: Array,
  author: [mongoose.Schema.Types.ObjectId],
  pages: Number
});
