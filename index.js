const express=require("express")
const {connection}=require("./db")
const{userRouter}=require("./routes/user.routes")
const{bookRouter}=require("./routes/books.routes")
const{ authenticate}=require("./middlewares/authenticate.middleware")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())

app.use("/users",userRouter)
app.use(authenticate)
app.use("/books",bookRouter)




app.listen(4300,async()=>{

try {
    await connection
    console.log("connected to db");
} catch (error) {
    console.log(error)
}

    console.log("your port is 4300")
})

