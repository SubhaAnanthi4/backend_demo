const express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    
    res.send("User information");
   
});

router.get('/newuser',(req,res)=>{                   // if we use newuser down the id then it will not work
    
    res.send("New User information Added");
   
});


router.get('/deleteuser',(req,res)=>{
    
    res.send(" User information deleted");
   
})

router
.route('/:id')
.get((req,res)=>{

    console.log(req.usery); // to get the value of id
    res.send("retrieve id value " +req.params.id);
})                       

.put((req,res)=>{
    res.send("update this id value " +req.params.id);
})
.delete((req,res)=>{
    res.send("delete this id value " +req.params.id);
}) 

const user=[{name:"Rahul"},{name:"Rohit"},{name:"Raj"}];

router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=user[id];
    next();
})
// router.get('/:id',(req,res)=>{
//     res.send("retrieve id value" +req.params.id);
// })                       

// router.put('/:id',(req,res)=>{
//     res.send("update this id value" +req.params.id);
// })
// router.delete('/:id',(req,res)=>{
//     res.send("delete this id value" +req.params.id);
// }) 
module.exports=router;

//params is used to get parameters fro the URL
//anything after / is considered a parameter