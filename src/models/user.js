import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    email: {
        type: String,
        minLength: 6,
        required: true,
        unique: true
    },

    pass: {
        type: Number,
        required: true,
    }
}, { timeseries: true })
export default mongoose.model('user', userSchema);