const db=require('../config/mongoose');
const todo=require('../models/schema');

module.exports.home=function(req,res)
{
    
    todo.find({},function(err,task){
        if(err)
        {
            console.log(`error in fetching `);
            return;
        }
        return res.render('index.ejs',{
            title1:'TO DO app',
            tasks:task
        });
    });
}
module.exports.createTask=function (req , res)
{
    todo.create({
        description:req.body.description,
        category:req.body.category,
        date:getDate(req.body.date)
    },function(err,new_task){
        if(err)
        {
            console.log(`error in creating ${err}`);
            return;
        }
        res.redirect('back');
    });

}


module.exports.deleteTask=function (req , res)
{
    let ids=req.body.id;
    const query = { _id: { $in: ids} };
    todo.deleteMany(query,function(err){
        if(err)
        {
            console.log(`error in deleting document from database ${err}`);
            return;
        }
            res.redirect('back');
    });

}








function getDate(date)
{
    var month={
        01:'JAN',
        02:'FEB',
        03:'MAR',
        04:'APR',
        05:'MAY',
        06:'JUN',
        07:'JUL',
        08:'AUG',
        09:'SEP',
        10:'OCT',
        11:'NOV',
        12:'DEC'
    }

    var mod_date=date.split("-");
    if(mod_date.length==3)
            return month[mod_date[1]]+" "+String(mod_date[2]).padStart(2,'0')+","+mod_date[0];
     else{
         return "NO DEADLINE";
     }       
}