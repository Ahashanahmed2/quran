import Book from "../../modal/book.js";

//pos
export const pos = async (req, res) => {
  const DB = new Book(req.body);

  try {
    await DB.save();
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};

//f1
export const f1 = async (req, res) => {
  const DB = await Book.find();

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};



//f2
export const f2 = async (req, res) => {

    let i= req.query.id
  
 let query = new RegExp(i,'igm')

  const DB = await Book.find(
    {
 
   
    
    $or: [
      { book: query },
      { Author_Introduction: query },
      { Meaning_of_Revelation: query },
      { History_of_Quran_Revelation: query },
      { History_of_Preservation_of_Quran: query },
      { Misconceptions_about_Tafsir: query },
    ],
    }
  );

  try {
      
      res.status(200).json(DB);
    } catch {
      (err) => {
        res.status(404).json({ message: err.message });
      };
    }
  
  
};

//edite
export const edite = async (req, res) => {
 
  let id = req.query.id;
  
  
  const DB = await Book.findByIdAndUpdate({ _id: id },req.body);

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};

//delete
export const delet = async (req, res) => {
  let id = req.query.id;
  const DB = await Book.findByIdAndDelete({ _id:id });

  try {
    
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};
