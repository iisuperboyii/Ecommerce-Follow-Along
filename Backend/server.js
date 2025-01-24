const express = require('express');
const mongoose = require('mongoose');
const { userModel } = require('./model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); // Load environment variables


const app = express();


app.use(express.json());
app.use(cors());

let connection = mongoose.connect(process.env.MONGODB_URI); // Use environment variable for MongoDB URI

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.post("/create", async (req, res) => {
    let payLoad = req.body;

    const hashedPassword = await bcrypt.hash(payLoad.password, 10);
    payLoad.password = hashedPassword; // Replace the plain password with the hashed one

    try {
        let new_user = new userModel(payLoad);
        await new_user.save();
        res.send({ "message": "Hurray! Successfully saved the user to the database" });
    } catch (error) {
        console.error("Error creating user:", error); // Improved error logging
        res.status(500).send({ "error": "Failed to create user" });
    }
});

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/'); // Save files in the uploads folder
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Add a unique identifier to avoid name conflicts
    }
});

const upload = multer({ storage: storage });

// POST route for file upload
app.post('/upload', upload.single('myFile'), (req, res) => {
    try {
        console.log('File uploaded successfully:');
        console.log(req.file); // Log the uploaded file's details

        res.status(200).send({
            message: 'File uploaded successfully',
            fileDetails: req.file // Include file details in the response
        });
    } catch (error) {
        console.error('Error during file upload:', error);
        res.status(500).send({
            message: 'File upload failed',
            error: error.message
        });
    }
});

app.post("/signup", async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const userPresent = await userModel.findOne({ email });
    if (userPresent?.email) {
        res.send("Try logging in, already exists");
    } else {
        try {
            bcrypt.hash(password, 4, async function (err, hash) {
                if (err) {
                    console.error("Error hashing password:", err); // Improved error logging
                    return res.status(500).send("Error during signup");
                }
                const user = new userModel({ name, email, password: hash });
                await user.save();
                res.send("Sign up successful");
            });
        } catch (error) {
            console.error("Error during signup:", error); // Improved error logging
            res.send("Something went wrong, please try again later");
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
})

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error); // Improved error logging
    }

    console.log(`Server is running on port ${process.env.PORT}`);
});
