const { response } = require('express')
const User = require('../models/user.model')
const { error } = require('console')



//shows list of users
const allUser = (req,res,next) => {
    User.find()
    .then(response => {
        res.send(insertData)
        res.json({
            response

        })
    })
    .catch(error => {
        res.json({
            message:'An error Occured'
        })
    })

}

//shows individual user
const show = (req,res,next)=>{
    let userID = req.body.userID
    User.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured'
        })
    })
}

//inserts the user data
const insertData = (req,res,next) => {

    console.log("Request Body:", req.body);
    
    let user = new User();
        user.name=req.body.name;
        user.email=req.body.email;
        user.phone=req.body.phone;
    
    console.log(req.body);
    user.save()
    .then(response => {
        response
        res.send(response)
        res.json({
            message:'User Added!',
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured'
        })
    })
}

//updates the user details
const update = (req,res,next)=>{
    let userID = req.body.userID;
    let updatedUser = {
        name:req.body.username,
        email:req.body.email,
        phone:req.body.phone
    }

    User.findByIdAndUpdate(userID,{$set:updatedUser})
    .then(() => {
        res.json({
            message:'User Updated!'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured'
        })
    })
}

//deletes the user
const deleteuser = (req,res,next) => {
     let userID = req.body.userID;
     User.findByIdAndRemove(userID)
     .then(() => {
        res.json({
            message:'User Deleted!'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured'
        })
    })

}

module.exports = {
    allUser,show,insertData,update,deleteuser
}