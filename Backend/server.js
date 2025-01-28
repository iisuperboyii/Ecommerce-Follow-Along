const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const multer = require('multer');
const { userModel } = require('./model/user.model');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {productModel} = require('./model/product.model');
const {productRouter} = require('./routes/product.route');

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

let connection = mongoose.connect(process.env.MONGODB_URI);

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.post("/create", async (req, res) => {
    let payLoad = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(payLoad.password, 10);
    payLoad.password = hashedPassword; // Replace the plain password with the hashed one

    try {
        let new_user = new userModel(payLoad);
        await new_user.save();
        res.send({ "message": "Hurray! Successfully saved the user to the database" });
    } catch (error) {
        console.log(error);
        res.send({ "error": error });
    }
});

// Removed the upload route

app.post("/signup" , async (req,res) => {
    console.log(req.body)
    const {name,email,password}=req.body
    const userPresent=await userModel.findOne({email})
    if(userPresent?.email){
        res.send("Try loggin in ,already exist")
    }else{
        try {
            bcrypt.hash(password,4,async function (err,hash){
                const user = new userModel({name,email,password:hash})
                await user.save()
                res.send("Sign up successfull")
            })
        } catch (error) {
            console.log(err)
            res.send("Something went wrong,pls try again later")
        }
    }
});

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;

    try {
        let user = await userModel.find({email});

        if(user.length>0){
            let hashedPassword=user[0].password;
            bcrypt.compare(password,hashedPassword,function(err,result){
                if(result){
                    let token = jwt.sign({"user ID":user[0]._id},process.env.SECRET_KEY)
                    res.send({"msg":"Login Successfull","token":token})
                }else{
                    res.send({"msg":"Invalid Password"})
                }
            })
        }else{
            res.send({"msg":"Invalid Email"})
        }
    } catch (error) {
        res.json({"Message":"Something went wrong!"})
    }
});

app.use("/product",productRouter);

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log(error);
    }

    console.log(`Server is running on port ${process.env.PORT}`);
});