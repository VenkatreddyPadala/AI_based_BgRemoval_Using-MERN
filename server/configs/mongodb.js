import mongoose from "mongoose";    
import 'dotenv/config'

const uri = "mongodb+srv://venkatreddypadalanet:J2GwrNE07Ze8IjAd@backgroundremoval.ewxbr.mongodb.net/Backgroundremoval";
const connectDB = () => {
    mongoose.connect(uri)
       .then(() => console.log("MongoDB Connected..."))
       .catch(err => console.error("Connection error:", err));
}

export default connectDB;