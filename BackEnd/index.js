import express from "express"


const port = process.env.PORT || 3000;  /* Defining the port no port then runs on localhost 3000 */
const app = express();

app.get("/test",(req,res)=>{    /*Setting up first endpoint */
    res.send("Its working")
})

app.listen(port, ()=> {
    console.log("Server running on port 3000")
});