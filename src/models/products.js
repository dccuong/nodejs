import mongoose, { Schema } from "mongoose";
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
    }
}, { timeseries: true })

export default mongoose.model('Product', productShema);