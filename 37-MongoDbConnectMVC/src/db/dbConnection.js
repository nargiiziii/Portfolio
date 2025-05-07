import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected with mongo");
}).catch(()=> {
    console.log("server not connect with mongo");
})