const mongoose=require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/TO_DO_APP');

//acquiring the connection
const db=mongoose.connection;

//if error 
db.on('error',console.error.bind(console,`error connecting to db`));

//if no error
db.once('open',function(){
    console.log(`succesfully connected to database`);
})