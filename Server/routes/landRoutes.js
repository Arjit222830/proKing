const express= require('express');
const router= express.Router();
const {Land}= require('../models/land');

router.get('/',async (req,res)=>{
    const lands=await Land.find();
    res.send(lands);
});

router.get('/:id',async (req,res)=>{
    const land=await Land.find({_id: req.params.id});
    res.send(land[0]);
});

router.post('/',async (req,res)=>{
    
    const land= new Land(req.body);

    await land.save();
    
    res.send(land);
});

//Update
router.put('/:id',async (req,res)=>{
    
    let land = await Land.findByIdAndUpdate(req.params.id, req.body,  {new: true});
  
    await land.save();

    res.send(land);
});



router.delete('/:id', async (req,res)=>{
    
    const remove=await Land.deleteOne({_id:req.params.id});
    if(!remove)
        return res.status(404).send({link:"/",message:"Given ID was not found"});//404 is error not found
    
   res.end();
});

module.exports= router;