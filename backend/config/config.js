import mongoose from "mongoose";
import dotenv from 'dotenv';

// This loads the .env file
dotenv.config();

const connectDB = async () => {
    try {
        console.log('CONNECTED');
        
        // This MUST match the variable name in your .env file
        const url = process.env.MONGO_URI; 

        // This line is for debugging, you can remove it later
        console.log("Attempting to connect with:", url);

        const conn = await mongoose.connect(url);
        
        console.log(`Mongodb Database Connected!`);
    }
    catch (err) {
            console.log(`Error : ${err.message}`);
    }
}

export default connectDB;


