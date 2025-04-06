import app from "./app.js";
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config({path : "./config/config.env"});
cloudinary.v2.config({
	cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
	api_key: process.env.CLOUDINARY_CLIENT_API_KEY,
	api_secret:process.env.CLOUDINARY_CLIENT_API_SECRET,
  });

app.listen(5000,()=>{
	console.log(`SERVER LISTENING ON`);

});
