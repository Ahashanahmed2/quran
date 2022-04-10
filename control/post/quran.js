
const Quran = require("../../modal/quran.js");
exports.pos = async (req, res) => {
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
exports.f1 = async (req, res) => {
  const DB = await Quran.find();

  try {
    res.status(200).send(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//id
exports.id = async (req, res) => {
  let i = req.params.id;

 

  const DB = await Quran.find({ book: { $regex: i } });

  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//surah
exports.surah = async (req, res) => {
  let surah = req.params.surah;

  const DB = await Quran.find({_id:surah });
 
  try {
    res.status(200).json(DB);
  } catch {
    (err) => {
      res.status(404).json({ message: err });
    };
  }
};

//edite
exports.edite = async (req, res) => {
  let id = req.params.id;

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
exports.delet = async (req, res) => {
console.log(req.params.id)
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
