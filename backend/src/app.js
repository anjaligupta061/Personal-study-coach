import express from 'express';
import  cookieParser from 'cookie-parser';
import materialRoutes from "./routes/material.routes.js";

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static('public'));

app.use("/api/v1/materials",materialRoutes);
export  default  app ;