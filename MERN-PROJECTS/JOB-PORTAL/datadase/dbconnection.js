import mongoose from "mongoose";
 export const dbConnection =()=>{
	mongoose.connect(process.env.MONGO_URI,({
		dbName: "MERN-PROJECT-FIRST"
	})).then(()=>{
		console.log("mongo db connected");
	}).catch((err)=>{
		console.log(`some error ${err}`);
	})

}