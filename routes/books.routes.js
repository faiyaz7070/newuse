const express=require("express")
const {BookModel}=require("../model/book.model")
const bookRouter=express.Router()
bookRouter.get("/all",async(req,res)=>{
    let payload=req.body
    let data=await BookModel.find(payload)
    res.send(data)
})
bookRouter.post("/create",async(req,res)=>{
    const addone=req.body
    try {
        const post=new BookModel(addone)
        await post.save()
        res.send("all data created")
    } catch (error) {
        console.log(error);
        
    }

})
bookRouter.patch("/edit/:id",async(req,res)=>{
    const newid=req.params.id;
    const body=req.body
    try {
        await BookModel.findByIdAndUpdate({_id:newid},body)
        res.send("data has been edited")
    } catch (error) {
        console.log(error);
    }
    
})
bookRouter.delete("/delete/:id",async(req,res)=>{
    const newid=req.params.id;
   
    try {
        await BookModel.findByIdAndDelete({_id:newid})
        res.send("data has been deleted")
    } catch (error) {
        console.log(error);
    }
})

module.exports={
    bookRouter
}