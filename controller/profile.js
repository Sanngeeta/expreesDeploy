// const bcrypt=require('bcrypt')
// const jwt=require('jsonwebtoken')
// const cookie = require('cookie-parser')
// const profile=require('../models/profileSchema')





// allProfile=async(req,res)=>{
//     try{
//         const profiles=await profile.find({})
//         res.send({
//             status:200,
//             message:'All Category!',
//             profile:profiles
//         })
//     }catch(err){
//         res.send({        
//         status:404,
//         message:'Data Not Found!',
//         error:err})
//     }
// }







// // profileSignup=(req,res)=>{
// //     console.log(req.body);
// //     bcrypt.hash(req.body.password,10,(err,haspass)=>{
// //         if(err){
// //             console.log(err);
// //            return res.json({message:err})
// //         }
// //         const newUsers={
// //             client:req.body.client,
// //             client_id:req.body.client_id,
// //             org_id:req.body.org_id,
// //             version:req.body.version,
// //             phoneNumbre:req.body.phoneNumbre,
// //             email:req.body.email,
// //             password:haspass,
// //             data:req.body.data,
// //             notes:req.body.notes,
// //             metadata:req.body.metadata,
// //             role:req.body.role,
// //             status:req.body.status,
// //             created_data:req.body.created_data
// //         }
// //         const insertData=profile.insertMany([newUsers])
// //         .then((insertData)=>{
// //             res.status(201).send({
// //                 message:'You Are Signup successfully!',
// //                 user:insertData
// //             })
// //         }).catch((err)=>{
// //             res.send({status:208,
// //             message:'Email already exits!',
// //             error:err
          
// //             })
// //         })

// //     })

   

// // }












// profileSignup=(req,res)=>{
//     console.log(req.body);
//     bcrypt.hash(req.body.password,10,(err,haspass)=>{
//         if(err){
//             console.log(err);
//            return res.json({message:err})
//         }
//         const newUsers={

//             phoneNumbre:req.body.phoneNumbre,
//             email:req.body.email,
//             password:haspass,
//             role:req.body.role,
//             status:req.body.status,
//         }
//         const insertData=profile.insertMany([newUsers])
//         .then((insertData)=>{
//             res.status(201).send({
//                 message:'You Are Signup successfully!',
//                 user:insertData
//             })
//         }).catch((err)=>{
//             res.send({status:404,
//             message:'Email already exits!',
//             error:err
          
//             })
//         })

//     })

   

// }
























// profileLogin=(req,res)=>{
//     var email=req.body.email
//     var password=req.body.password
//     if(!email || !password){
//         return res.send({status:401,
//             success:false,
//             message:'Missing Fields, All Fields Required!'})
//     }
//     profile.findOne({email:email})
//     .then((userData)=>{
//         bcrypt.compare(password,userData.password,(err,result)=>{
           
//             if(err){
//                 res.send({error:'Invalid Password or Email'})
//             }else{
//                 if(result){
//                     let token=jwt.sign({id:userData._id},'JozbizCamnpny', {expiresIn: '6h'})
//                     res.cookie("user",token)
//                     res.json({
//                         message:'Login Successful!',
//                         userDetails:userData,
//                         Token:token
//                     })
//                 }else{
//                     res.json({
//                         message:'Invalid Password or Email'
//                     })
//                 }
//             }
        
//         })

//     }).catch((err)=>{
//         console.log(err);
//         res.json({
//             status:404,
//             seccess:false,
//             message:'User Not Found'})
//     })

    
// }











// module.exports={profileLogin,allProfile,profileSignup,}























































// // customers=async(req,res)=>{
// //     try{
// //         bcrypt.hash(req.body.password,10,(err,haspass)=>{
// //             if(err){
// //                 res.json({message:err})
// //             }
// //         })
// //         const newCustomers=new customers({
// //                 firstName:req.body.firstName,
// //                 lastName:req.body.lastName,
// //                 class:req.body.class,
// //                 room:req.body.room,
// //                 address1:req.bode.address1,
// //                 address2:req.bode.address2,
// //                 city:req.body.city,
// //                 state:req.body.state,
// //                 postalCode:req.body.postalCode,
// //                 country:req.body.country,
// //                 phone:req.body.phone,
// //                 email:req.body.email,
// //                 password:haspass,
// //                 voiceMail:req.body.voiceMail,
// //                 creditCard:req.body.creditCard,
// //                 cardExpMo:req.body.cardExpMo,
// //                 cardExpYr:req.body.cardExpYr,
// //                 billingAddress:req.body.billingAddress,
// //                 billingCity:req.body.billingCity,
// //                 billingRegion:req.body.billingRegion,
// //                 billingPostalCode:req.body.billingPostalCode,
// //                 billingCountry:req.body.billingCountry,
// //                 shipAddress:req.body.shipAddress,
// //                 shipRegion:req.body.shipRegion,
// //                 shipCity:req.body.shipCity,
// //                 shipPostalCode:req.body.shipPostalCode,
// //                 shipCountry:req.body.shipCountry,
// //             })

// //     const insertData= await model.insertMany(newCustomers)
// //     res.json({
// //         message:'New Customer Added',
// //         profile:insertData
// //     })
// //     }catch(err){
// //         console.log(err);
// //         res.json({
// //             message:'Email id already exits!',
// //             error:err
            
// //         })
// //     }
// // }








// // clientSignup=(req,res)=>{
// //     console.log(req.body);
// //     bcrypt.hash(req.body.password,10,(err,haspass)=>{
// //         if(err){
// //             console.log(err);
// //            return res.json({message:err})
// //         }
// //         const newUsers={
// //             client:req.body.client,
// //             client_id:req.body.client_id,
// //             org_id:req.body.org_id,
// //             version:req.body.version,
// //             data:{
// //                 countryCode:req.body.countryCode,
// //                 phoneNumber:req.body.phoneNumber,
// //                 name:req.body.name,
// //                 address:req.body.address,
// //                 email:req.body.email,
// //                 password:haspass

// //             },
// //             city:req.body.city,
// //             role:req.body.role,
// //             status:req.body.status,
// //             cretaed_data:[{
// //                 month:req.body.month,
// //                 year:req.body.year
// //             }]  
// //         }
// //         const insertData=profile.insertMany([newUsers])
// //         .then((insertData)=>{
// //             res.status(201).send({
// //                 message:'You Are Signup successfully!',
// //                 user:insertData
// //             })
// //         }).catch((err)=>{
// //             console.log(err,'kkkkkkk');
// //             res.send({status:208,
// //             message:'Email already exits!',
// //             error:err
          
// //             })
// //         })

// //     })
   

// // }


// // client:req.body.client,
// //             client_id:req.body.client_id,
// //             org_id:req.body.org_id,
// //             version:req.body.version,
// //             data:{
// //                 countryCode:req.body.countryCode,
// //                 phoneNumber:req.body.phoneNumber,
// //                 name:req.body.name,
// //                 address:req.body.address,
// //                 email:req.body.email,
// //                 password:haspass

// //             },
// //             city:req.body.city,
// //             role:req.body.role,
// //             status:req.body.state,
// //             cretaed_data:[{
// //                 month:req.body.month,
// //                 year:req.body.year
// // //             }]  


// // clientSignup=async(req,res)=>{
// //     console.log(req.body);
// //     const {client,version,countryCode,phoneNumber,name,address,email,password,city,role,status,month,year}=req.body
// //     const user=await profile.insertMany({
// //         client,version,
// //         data:{countryCode,phoneNumber,name,address,email,password,},
// //         city,role,status,
// //         cretaed_data:{ month,year}

// //     })
// //     .then((data)=>{
// //         res.send(data)
// //     }).catch((err)=>{
// //         res.send(err)
// //     })
// // }
























// // clientSignup=(req,res)=>{
// //     bcrypt.hash(req.body.password,10,(err,haspass)=>{
// //         if(err){
// //             res.json({message:err})
// //         }
// //         const newUsers=new Client({
// //             firstName:req.body.firstName,
// //             lastName:req.body.lastName,
// //             phone:req.body.phone,
// //             postalCode:req.body.postalCode,
// //             city:req.body.city,
// //             state:req.body.state,
// //             address:req.body.address,
// //             email:req.body.email,
// //             password:haspass    
// //         })
// //         newUsers.save()
// //         .then((data)=>{
// //             res.status(201).send({
// //                 message:'You Are Signup successfully!',
// //                 user:data
// //             })
// //         }).catch((err)=>{
// //             console.log(err);
// //             res.send({status:208,
// //             message:'Email already exits!',
// //             error:err
          
// //             })
// //         })

// //     })

   

// // }


// // clientLogin=(req,res)=>{
// //     var email=req.body.email
// //     var password=req.body.password
// //     Client.findOne({email:email})
// //     .then((userData)=>{
// //         console.log(userData);
// //         bcrypt.compare(password,userData.password,(err,result)=>{
           
// //             if(err){
// //                 res.send({error:'Invalid Password'})
// //             }else{
// //                 if(result){
// //                     let token=jwt.sign({id:userData._id},'JozbizComapny', {expiresIn: '6h'})
// //                     res.cookie("user",token)
// //                     res.json({
// //                         status:200,
// //                         message:'You Are Login successfully!',
// //                         userDetails:userData,
// //                         Token:token
// //                     })
// //                 }else{
// //                     res.json({
// //                         message:'Password Does Not Matched!'
// //                     })
// //                 }
// //             }
// //         })

// //     }).catch((err)=>{
// //         console.log(err);
// //         res.json({status:404,
// //         message:'User User found'})
// //     })

    
// // }





