import { Schema } from "mongoose";

export default class FilterDto {
  readonly author: Schema.Types.ObjectId
}
