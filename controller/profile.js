const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookie = require('cookie-parser')
const profile=require('../models/profileSchema')





allProfile=async(req,res)=>{
    try{
        const profiles=await profile.find({})
        res.send({
            status:200,
            message:'All Profiles!',
            profiles:profiles
        })
    }catch(err){
        res.send({        
        status:404,
        message:'Data Not Found!',
        error:err})
    }
}





getProfileById=async(req,res)=>{
    const id=req.params
    try{
        // console.log(id)
        const user=await profile.findOne({_id:req.params.id})
        res.send({
            status:200,
            message:'User Details',
            user
        })
        // console.log(user)
    }catch(err){
        res.send({        
        status:404,
        message:'Data Not Found!',
        error:err})
    }
}














profileSignup=(req,res)=>{
    console.log(req.body);
    bcrypt.hash(req.body.password,10,(err,haspass)=>{
        if(err){
            console.log(err);
           return res.json({message:err})
        }
        const newUsers={
            name:req.body.name,
            phoneNumbre:req.body.phoneNumbre,
            email:req.body.email,
            password:haspass,
        }
        const insertData=profile.insertMany([newUsers])
        .then((insertData)=>{
            res.status(201).send({
                message:'You Are Signup successfully!',
                user:insertData
            })
        }).catch((err)=>{
            res.send({status:404,
            message:'Email already exits!',
            error:err
          
            })
        })

    })

   

}
























profileLogin=(req,res)=>{
    var email=req.body.email
    var password=req.body.password
    if(!email || !password){
        return res.send({status:401,
            success:false,
            message:'Missing Fields, All Fields Required!'})
    }
    profile.findOne({email:email})
    .then((userData)=>{
        bcrypt.compare(password,userData.password,(err,result)=>{
           
            if(err){
                res.send({error:'Invalid Password or Email'})
            }else{
                if(result){
                    let token=jwt.sign({id:userData._id},'JozbizCamnpny', {expiresIn: '6h'})
                    res.cookie("user",token)
                    res.json({
                        message:'Login Successful!',
                        userDetails:userData,
                        Token:token
                    })
                }else{
                    res.json({
                        message:'Invalid Password or Email'
                    })
                }
            }
        
        })

    }).catch((err)=>{
        console.log(err);
        res.json({
            status:404,
            seccess:false,
            message:'User Not Found'})
    })

    
}











module.exports={profileLogin,allProfile,profileSignup,getProfileById}





















































