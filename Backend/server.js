const express=require('express');
const mongoose=require('mongoose');
const { userModel } = require('./model/user.model');

const app=express()
const PORT=8080

app.use(express.json())



let connection= mongoose.connect("mongodb+srv://aaronjomon24:aaronjomon5@aaronjomon.jvfff.mongodb.net/ecom_db")

app.get("/ping",(req,res)=>{
    res.send("pong")
})

app.post("/create",async(req,res)=>{
    let payLoad=req.body;

    try {
        let new_user= new userModel(payLoad);
        await new_user.save();
        res.send({"message":"Hurray! Successfully saved the user to the database"})
    }catch (error){
        console.log(error);
        res.send({"error":error})
    }
});

const multer  = require('multer')
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



app.listen(PORT,async()=>{
try{
    await connection;
    console.log("Successfully connected to MongoDB");
} catch (error){
    console.log(error);
}

    console.log(`Server is running on port ${PORT}`)
})