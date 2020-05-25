const express=require('express');
const mongoose=require('mongoose');

const taskRoutes=require('./routes/Task');

const app=express();
app.use(express.json());

mongoose.connect(
    'mongodb+srv://hasika1995:hasika1995@cluster1.x5o7d.mongodb.net/Tasks',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
).then(()=>{
    app.listen(5000,()=>{console.log('localhost:5000')})
}).catch((error)=>{
    console.log(error)
});


app.use('/api/tasks',taskRoutes);


