import User from '../models/user.js';
import {
    generateAccessToken,
    generateRefreshToken,
} from '../utils/generateTokens.js';
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user || !user.comparePassword(password)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid username or password',
            });
        }
        const refreshToken = generateRefreshToken(user);
        user.refreshToken = refreshToken;
        await user.save();
        user = {
            _id: user._id,
            username: user.username,
            role: user.role,
            email: user.email,
            accessToken: generateAccessToken(user),
        };

        res.cookie('token', refreshToken, { httpOnly: true }).status(200).json({
            success: true,
            user,
            message: 'User logged in successfully',
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const signup = async (req, res, next) => {
    try {
        let user = new User(req.body);
        const refreshToken = generateRefreshToken(user);
        user.refreshToken = refreshToken;
        await user.save();
        user = {
            _id: user._id,
            username: user.username,
            role: user.role,
            email: user.email,
            accessToken: generateAccessToken(user),
        };
        res.cookie('token', refreshToken, { httpOnly: true }).status(201).json({
            success: true,
            user,
            message: 'User signed up successfully',
        });
    } catch (err) {
        console.log('Signup error');
        console.log(err);
        if (err.name === 'ValidationError') {
            let errors = {};
            Object.keys(err.errors).forEach((key) => {
                errors[key] = err.errors[key].message;
            });
            return res.status(400).json({ success: false, message: errors });
        }
        if (err && err.code === 11000) {
            return res
                .status(409)
                .json({ success: false, message: 'User already exist' });
        }
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
const logout = async (req, res, next) => {
    try {
        res.send('hello');
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const refresh = async (req, res, next) => {
    try {
        res.send('hello');
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
export default { login, logout, signup, refresh };
