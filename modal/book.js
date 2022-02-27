import mongoose from "mongoose";
const quranSchema = new mongoose.Schema({
  book: String,
  Author_Introduction: String,
  Meaning_of_Revelation: String,
  History_of_Quran_Revelation: String,
  History_of_Preservation_of_Quran: String,
  Misconceptions_about_Tafsir: String,
 
});

const book = mongoose.model("Book", quranSchema);
export default book