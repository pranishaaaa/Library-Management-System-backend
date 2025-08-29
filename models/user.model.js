import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
        
        select: false,
        minlength: [8, 'Password must be at least 8 characters long']
    },
    role: {
        type: String,
        enum: ["borrower", "librarian"],
        default: 'borrower'
    },
},
{
    timestamps: true,
}
);
export const User = mongoose.model('User', userSchema);

export default User;
