import express from 'express';
import { config } from 'dotenv';
import authRoutes from './routes/auth.js';
config();
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
    console.log('Server connected successfully');
    console.log('=============================');
    console.log('Port number : ', PORT);
});
