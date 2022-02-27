import mongoose from "mongoose";
const quranSchema =new mongoose.Schema({

    book:String,
      name: String,
      number: String,
      versesNumber:String,
      verses: String,
        summary: String,
      ancillary_issues:String
   
 
}


);

 const modals = mongoose.model("Quran", quranSchema);
export default modals;