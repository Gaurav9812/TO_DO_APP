const express =require('express');
const port=8081;
const app=express();

app.use(express.urlencoded());
//setting view engine
app.set('view engine','ejs');
app.set('views','./views');

// setting static files
app.use(express.static('./assets'));

//routes
app.use('/',require('./routers/routes'));






app.listen(port,function(err)
{
    if(err)
    {
        console.log(`error creating server ${port}`);
        return ;

    }
    console.log(`server is up and running on port ${port}`);

});
