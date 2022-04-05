import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;
const productShema = new Schema({
    name: {
        type: String,
        minLength: 6,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true })

export default mongoose.model('Product', productShema);