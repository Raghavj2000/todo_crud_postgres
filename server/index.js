import express from "express";
import cors from "cors";
import pool from './db.js'
import todoRoutes from '../server/routes/todoRoutes.js'



const app = express();




//Middleware
app.use(cors());
app.use(express.json());
app.use('/todos',todoRoutes);




app.listen(5000,()=>{
    console.log("server running on port 5000");
})