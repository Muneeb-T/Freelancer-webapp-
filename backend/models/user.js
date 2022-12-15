import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Enter username'],
    },
    role: {
        type: String,
        enum: ['user', 'freelancer'],
        default: 'user',
    },
    email: {
        type: String,
        required: [true, 'Enter email address.'],
        unique: [true, 'Already exist account in this email.'],
    },
    password: {
        type: String,
        required: [true, 'Enter password'],
        minLength: [8, 'Password must be 8 characters long.'],
    },
    refreshToken: {
        type: String,
    },
});

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }
    next();
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('User', userSchema);
