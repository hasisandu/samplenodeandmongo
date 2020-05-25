
const TaskSchema=require('../modal/Task');

const createTask = (req, resp) => {

    const task=new TaskSchema({
        title:req.body.title,
        assignee:req.body.assignee,
    });
    task.save().then(()=>{
        resp.status(200).json({message: 'saved Success!'});
    }).catch(err=>{resp.status(500).json({message: 'Error'});})


};
const getTask=(req,resp)=>{

    TaskSchema.find({'_id':req.params.id},(error,result)=>{
        if (error){
            resp.status(500).json({message: error});
        }else{
            resp.status(200).json(result);
        }
    });


};

const updateTask= async (req,resp)=>{

    const TaskUpdate= await TaskSchema.findOneAndUpdate({'_id':req.params.id},{
        $set:{
            title:req.body.title,
            assignee:req.body.assignee,
            completed:req.body.completed,
        },

    },{new:true});

    if (TaskUpdate){
        resp.status(200).json({message: 'Update Success!'});
    }else{
        resp.status(500).json({message: 'Error!'});
    }
};
const deleteTask= async (req,resp)=>{
   const deletedItem = await TaskSchema.findOneAndDelete({'_id':req.params.id});
    if (deletedItem){
        resp.status(200).json({message: 'Delete Success!'});
    }else{
        resp.status(500).json({message: 'Error!'});
    }
};
module.exports={createTask,getTask,updateTask,deleteTask};