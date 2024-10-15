import dotenv from "dotenv" /*we are not using require syntax for this to maintain code consistency ,so we will use it as experimental features , we will also make changes in dev comannd in json file "-r dotenv/config --experimental-json-modules" */

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})




connectDB() //importing database function from db folder
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
    app.on("error", (error) => {
        console.log("ERRR: ", error)
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!!", err);
})