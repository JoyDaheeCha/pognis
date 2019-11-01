import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  previousPrice: {
    type: Number,
    required: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  discountRate: {
    type: Number,
    required: true
  },
  options: [
    {
      color: { type: String, required: true },
      size: { type: String, required: true },
      extraPrice: { type: Number, required: true },
      remainingNum: { type: Number, required: true }
    }
  ]
});

const model = mongoose.model("Product", ProductSchema);
export default model;
