import dotenv from 'dotenv';
import  app from './app.js';
import {connectDB} from "./db/db.js";
dotenv.config();

const PORT = process.env.PORT || 8080;

connectDB();

app.listen(PORT,()=>{
    console.log("Listening on port " + PORT);
});
