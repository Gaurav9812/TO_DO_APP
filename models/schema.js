const mongoose=require('mongoose');

const ToDOAppSchema=mongoose.Schema({
    description:{
        type:String
    },
    category:{
        type:String
    },
    date:{
        type:String
    }
});
const ToDoApp=mongoose.model('to-do-app',ToDOAppSchema);
module.exports=ToDoApp;