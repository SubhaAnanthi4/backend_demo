import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/userRoute.js'

const app=express();
app.use(bodyParser.json());   //
dotenv.config();
const PORT=process.env.PORT || 3001;   // If the  port is not available it will rum in 3001 port
const MONGOURI=process.env.MONGO_URI;
app.use('/api/user',router);        //  to use the router file in the server.js file

//database connection 
mongoose.connect(MONGOURI)
.then(()=>{
    console.log("Database connected");
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
      
})
.catch((err)=>{
    console.log("Error:",err);
}) 