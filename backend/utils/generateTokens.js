import jwt from 'jsonwebtoken';
const generateAccessToken = function ({ _id, role }) {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const data = {
        userId: _id,
    };
    const token = jwt.sign(data, jwtSecretKey, { expiresIn: '15m' });
    return token;
};

const generateRefreshToken = function ({ _id, role }) {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const data = {
        userId: _id,
    };
    const token = jwt.sign(data, jwtSecretKey, { expiresIn: '30d' });
    return token;
};

export { generateAccessToken, generateRefreshToken };
