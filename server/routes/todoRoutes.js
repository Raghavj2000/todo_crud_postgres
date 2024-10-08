import express from "express";
import pool from "../db.js";

const router = express.Router();

//ROUTES
//create a todo
router.post("/",async(req,res)=>{
    try {
        const {description}=req.body;
        const newTodo=await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);

        res.json(newTodo.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})


//get all todos

router.get("/",async (req,res)=>{
    try {
        const {description}=req.body;
        const alltodos=await pool.query("SELECT * FROM todo");

        res.json(alltodos.rows);
       
    } catch (error) {
        console.log(error.message);
    }
})
//get a single todo
router.get("/:id",async (req,res)=>{
    try {
        const {id}=req.params;
        const getTodo= await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
        res.json(getTodo.rows[0]);
        
    } catch (error) {
        console.log(error.message);
        
    }
})

//update a todo
router.put("/:id",async (req,res)=>{
    try {
        const {id}=req.params;
        const {description}=req.body;
        const updateTodo=await pool.query("UPDATE todo SET description=$2 WHERE todo_id=$1 RETURNING *",[id,description]);
        res.json(updateTodo.rows[0]);
        
    } catch (error) {
        console.log(error.message);
    }
})

//delete a todo
router.delete("/:id", async (req,res)=>{
    try {
        const {id}=req.params;
        const deleteTodo= await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);
        res.json("Todo was deleted");
        
        
    } catch (error) {
        console.log(error.message);
    }
})

export default router;