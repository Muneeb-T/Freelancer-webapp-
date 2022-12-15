import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import connectDatabase from './config/connect-db.js';

config();

const PORT = process.env.PORT || 4000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);

connectDatabase();

app.listen(PORT, () => {
    console.log('\nServer connected successfully');
    console.log('=============================');
    console.log('Port number : ', PORT);
});
