import mongoose, { Schema } from "mongoose";
import { createHmac } from 'crypto';

const userSchema = new Schema({
    email: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        minLength: 6,
        required: true
    },
    name: {
        type: String,
        minlength: 6,
        required: true
    }, status: {
        type: Number,
        default: 1
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true });
userSchema.pre("save", function (next) {
    // this.salt = abc
    this.pass = this.encryptPassword(this.pass)
    next();
});

userSchema.methods = {
    encryptPassword(pass) {
        if (!pass) return
        try {
            return createHmac("Sha256", "abc").update(pass).digest("hex");
        } catch (error) {
            console.log(error)
        }
    },
    authenticate(pass) {
        console.log('pas' + pass)
        console.log('pas ma hoa' + this.encryptPassword(pass))
        return this.pass === this.encryptPassword(pass)
    }
}
export default mongoose.model('User', userSchema);