const express=require('express')

const TaskController =require('../controller/Task');

const router=express.Router();

router.post('/saveTask',TaskController.createTask);
router.get('/getTask/:id',TaskController.getTask);
router.patch('/updateTask/:id',TaskController.updateTask);
router.delete('/deleteTask/:id',TaskController.deleteTask);

module.exports=router
