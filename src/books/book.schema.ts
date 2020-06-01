import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  categories: Array,
  description: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'authors'
  },
  pages: Number
});
