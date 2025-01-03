//schema pattern for user model 
import mongoose from 'mongoose';
const userSchema= mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});
export default mongoose.model("user",userSchema);  // users is the collection name in the database