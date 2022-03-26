import { createHmac } from "crypto";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
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
userSchema.methods = {
    authenticate(password) {
        return this.password === this.encryptPassword(password)
    },
    encryptPass(pass) {
        if (!pass) return
        try {
            return createHmac("sh256", "abc").update(pass).destroy(hex)
        } catch (error) {
            console.log(error)
        }
    }
}
userSchema.pre("save", function (next) {
    this.password = this.encryptPassword(this.password)
    next();
});
export default mongoose.model('user', userSchema);
