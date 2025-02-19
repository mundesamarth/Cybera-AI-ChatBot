import express from "express"
import ImageKit from "imagekit";
import cors from "cors";
import mongoose from "mongoose";
import UserChats from "./models/userChats.js";
import Chat from "./models/chat.js";
import "dotenv/config"; // ✅ This automatically loads .env variables




const port = process.env.PORT || 3000;  /* Defining the port no port then runs on localhost 3000 */
const app = express();

app.use(express.json());

app.use(cors({
    origin:process.env.CLIENT_URL,  
}));

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to MongoDB");
    } catch (err) {
      console.log(err);
    }
  };
  const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  });


app.get("/api/upload", async (req,res)=>{    /*Setting up first endpoint */
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})
app.post("/api/chats",async (req,res)=>{    
    const {userId, text} = req.body
    
    try{
        // CREATE A NEW CHAT
        const newChat = new Chat({
            userId:userId,
            history:[{role:"user",parts:[{text}]}],
        });

        const savedChat = await newChat.save()

        // CHECK IF THE USER CHAT EXISTS
        const userChats = await UserChats.find({userId:userId});

        if(!userChats.length){
            const newUserChats = new UserChats({
                userId:userId,
                chats:[
                    {
                        _id: savedChat._id,
                        title:text.substring(0,40)
                    }
                ]
            });

            await newUserChats.save()
        }
        else{
            await UserChats.updateOne({userId:userId},{
                $push:{
                    chats:{
                        _id:savedChat._id,
                        title: text.substring(0,40)
                    }
                }
            });
            res.status(201).send(newChat._id)
        }

    }catch(err){
        console.log(err)
        res.status(500).send("Error creating chat!!")
    }
});

app.listen(port, ()=> {
    connect()
    console.log("Server running on port 3000")
});