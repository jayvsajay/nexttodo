import mongoose from 'mongoose';

async function connectDB() {
    try{
        await mongoose.connect(process.env.mongodburl, {useNewUrlParser: true});
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;