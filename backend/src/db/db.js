import mongoose from "mongoose";
import  dotenv from 'dotenv';
dotenv.config();


const MONGODB_URI = process.env.MONGO_URI
// console.log(process.env.MONGO_URI);

const connectDB = async () => {
    try{
        const dbConnection = await mongoose.connect(MONGODB_URI);
        console.log("MongoDB Connected");
    }catch(e){
        console.error(e);
    }
}

export {connectDB};