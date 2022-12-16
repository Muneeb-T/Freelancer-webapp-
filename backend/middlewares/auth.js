import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/user.js';
export const authorize = (roles = []) => {
    return async (req, res, next) => {
        try {
            const bearerHeader = req.headers['authorization'];
            if (typeof bearerHeader !== 'undefined') {
                const bearerToken = bearerHeader.split(' ')[1];
                const jwtSecretKey = process.env.JWT_SECRET_KEY;
                try {
                    const { _id, role } = jwt.verify(bearerToken, jwtSecretKey);
                    const user = await User.findById(_id);
                    if (!user) {
                        return res
                            .status(403)
                            .json({ success: false, message: 'Invalid user' });
                    }
                    if (typeof roles === 'string') {
                        roles = [roles];
                    }
                    if (roles.length && !roles.includes(role)) {
                        return res.status(401).json({
                            success: false,
                            message: 'Unauthorized access',
                        });
                    }
                    req.user = user;
                    next();
                } catch (err) {
                    if (err.message === 'jwt expired') {
                        return res.status(401).json({
                            success: false,
                            message: 'Token expired',
                        });
                    }
                    if (err.message === 'invalid signature') {
                        return res.status(403).json({
                            success: false,
                            message: 'Unauthorized access',
                        });
                    }
                    throw err;
                }
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Invalid token',
                });
            }
        } catch (err) {
            console.log('Jwt verification function error');
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
};
