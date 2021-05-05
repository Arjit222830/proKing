const express= require('express');
const router= express.Router();
const {Land}= require('../models/land'); 
const auth = require('../middlewares/auth');

router.get('/',auth,async (req,res)=>{
    const lands=await Land.find();
    res.send(lands);
});

router.get('/:id',auth,async (req,res)=>{
    const land=await Land.find({_id: req.params.id});
    res.send(land[0]);
});

router.post('/',auth,async (req,res)=>{
    const notUnique=await Land.findOne({name: req.body.name});

    console.log(notUnique);

    if(notUnique)
        return res.send({error:'Land Already Existed'});
    
    const land= new Land(req.body);

    await land.save();
    
    res.send(land);
});

//Update
router.put('/:id',auth,async (req,res)=>{

    const notUnique=await Land.findOne({ _id:{"$ne": req.params.id }, name: req.body.name});

    if(notUnique)
        return res.send({error:'Land Already Existed'});
    
    let land = await Land.findByIdAndUpdate(req.params.id, req.body,  {new: true});
  
    await land.save();

    res.send(land);
});

router.delete('/:id', auth, async (req,res)=>{
    
    const remove=await Land.deleteOne({_id:req.params.id});
    if(!remove)
        return res.status(404).send({link:"/",message:"Given ID was not found"});//404 is error not found
    
   res.end();
});

module.exports= router;