const express = require ('express'); // express variable name may be anything
const app = express(); //app variable name may be anything
app.set('view engine','ejs'); // to set the view engine as ejs
//app.listen(3000); //runs the server on port 3000
app.get('/',(req,res)=>{
    console.log("hi");
    //res.status(500).send("Error Occured");
    //res.status(200).send({error: "error message"});
    //res.json({express: "learning express"});
    res.send("HEllo World");
   // res.render("index.ejs",{text:'World'});  // to call the frontend index.ejs file in server.js
});

const userRoute=require('./routes/User'); 
app.use('/user',userRoute);
app.listen(3001);
