
import Subject from "../../modal/subject.js";

export const pos = async (req, res) => {
  const DB = new Subject(req.body);

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
  const DB = await Subject.find();

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
  let i = req.query.id;

  let query = new RegExp(i, "igm");

  const DB = await Subject.find({
   
      book: query ,
     name:query
    
  });

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

  const DB = await Subject.findByIdAndUpdate({ _id: id },rew.body);

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
  const DB = await Subject.findByIdAndDelete({ _id: id });

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};
