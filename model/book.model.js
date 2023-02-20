const mongoose=require("mongoose")


const bookSchema=mongoose.Schema({
    name:String,
    author:String,
    genre:String
  
})
const BookModel=mongoose.model("allbook", bookSchema)

module.exports={
    BookModel
}