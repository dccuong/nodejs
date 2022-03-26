import { createHmac } from "crypto";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    },
    name: {
        type: String,
        minlength: 6,
        required: true
    }
}, { timestamps: true });
userSchema.pre("save", function (next) {
    this.salt = uuidv4();
    this.password = this.encryptPassword(this.password);
    next();
})
userSchema.methods = {
    authenticate(password) {
        return password === this.encryptPassword(password);
    },
    encryptPassword(password) {
        if (!password) return
        try {
            return createHmac("Sha256", this.salt).update(password).digest("hex");
        } catch (error) {
            console.log(error)
        }
    }
}
export default mongoose.model('User', userSchema);
