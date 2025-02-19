import express from "express"
import ImageKit from "imagekit";
import cors from "cors";


const port = process.env.PORT || 3000;  /* Defining the port no port then runs on localhost 3000 */
const app = express();

app.use(cors({
    origin:process.env.CLIENT_URL,
     
}))

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
  });

app.get("/api/upload",(req,res)=>{    /*Setting up first endpoint */
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.listen(port, ()=> {
    console.log("Server running on port 3000")
});