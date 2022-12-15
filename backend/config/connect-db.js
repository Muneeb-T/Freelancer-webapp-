import mongoose from 'mongoose';
const connectDatabase = () => {
    try {
        const uri = process.env.MONGODB_URI;
        mongoose.connect(uri);
        mongoose.connection.on('connected', () => {
            console.log('\nDatabase connected succesfully');
            console.log('==============================');
            console.log('Database : Mongodb');
            console.log('URI      :', uri);
        });
        mongoose.connection.on('error', (err) => {
            console.log('Database connection error');
            process.exit();
        });
    } catch (err) {
        console.log('Database connection error');
        process.exit();
    }
};

export default connectDatabase;
