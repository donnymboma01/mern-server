import mongoose from "mongoose";


const connectDB = async () =>{
    try{
        const connexion = await mongoose.connect(process.env.MONGO_BD);

        console.log(`MongoDB connected : ${connexion.host}`);
    }catch(err){
        console.log("Error whilte trying to connect to the database : ",err);
    }
};


module.exports = connectDB;