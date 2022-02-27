import mongoose from "mongoose";
const quranSchema = new mongoose.Schema({
    book:String,
name:String
});

const modals = mongoose.model("Subject", quranSchema);
export default modals;
