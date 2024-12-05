import mongoose, { Schema } from "mongoose";

const CatSchema = new Schema(
  {
    name: String,
    breed: String,
    color: String,
  },
  { timestamps: true }
);

const Cat = mongoose.models.Cat || mongoose.model("Cat", CatSchema);

export default Cat;
