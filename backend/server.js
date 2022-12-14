import express from 'express';
import { config } from 'dotenv';
config();
const PORT = process.env.PORT || 4000
const app = express();
app.use(express.json());
app.listen(PORT, ()=>{
    console.log('Server connected successfully')
    console.log('=============================')
    console.log('Port number : ', PORT);
})
