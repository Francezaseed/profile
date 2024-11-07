const User = require('../models/users');

exports.getUsers = async(req,res)=>{
    try{
        const result = await User.find({})
        if(result){
            res.status(200).json({result})
        }else{
            res.status(400).json({msg:"Records Not Found!"})
        }
    }catch(e){
        res.status(500).json({msg:"Internal Server Error!"})
    }
}

exports.postUsers = async(req,res)=>{
    try{
        const {name, age, gender, skill}=req.body;
        const newForm = new User({
            name, 
            age, 
            gender, 
            skill
        })
        await newForm.save();
        res.status(201).json({msg:"New User Register success!"})
    }catch(e){
        res.status(500).json({msg:"Internal Server Error!"})
    }
}