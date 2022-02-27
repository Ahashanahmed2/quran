import Quran from "../../modal/quran.js";

export const pos = async (req, res) => {
  const DB = new Quran(req.body);

  try {
    await DB.save();
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};

//f1
export const f1 = async (req, res) => {
  const DB = await Quran.find();

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

  const DB = await Quran.find({
    $or: [
      { book: query },
      { name: query },
      { number: query },
      { versesNumber: query },
      { verses: query },
      { summary: query },
      { ancillary_issues: query },
    ],
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
  let id = req.params.id;
console.log(id)
  const DB = await Quran.findByIdAndUpdate({ _id: id },req.body);

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
  let id = req.params.id;
  const DB = await Quran.findByIdAndDelete({ _id: id });

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err.message });
    };
  }
};
