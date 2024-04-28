import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: Number,
        unique: true,
    },
    postalAddress: {
        type: String,
    }

});


export default mongoose.models.User || mongoose.model('User', UserSchema);