import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Order = new Schema({
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
  products: {
    type: [Schema.Types.ObjectId],
    ref: 'Product',
    required: true,
  },
  status: {
    type: String,
    enum: {
      values: ['Pending', 'Processing', 'Delivered', 'Canceled'],
      message:
        'Invalid type for status. Only: Processing, Pending, Delivered, Canceled are allowed!',
    },
    required: true,
  },
})
export default mongoose.model('Order', Order)
