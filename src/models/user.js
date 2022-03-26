import { createHmac } from "crypto";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    pass: {
        type: String,
        required: true,
    }
}, { timeseries: true })
userSchema.methods = {
    authenticate(pass) {
        return this.pass === this.encryptPassword(pass)
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
    this.pass = this.encryptPassword(this.pass)
    next();
});
export default mongoose.model('User', userSchema);
