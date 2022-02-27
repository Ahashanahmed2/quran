import M from "../modal/quran.js";

// {

export const book = async (req, res) => {
  console.log(req.href);
  const db = await M.find();

  try {
    res.send(db);
  } catch {
    (err) => {
      res.send(err);
    };
  }
};

export const pos = async (req, res) => {
  const aa = req.body;
  const d = new M(aa);

  try {
    await d.save();
    res.status(200).json(d);
  } catch {
    (err) => {
      res.send(err);
    };
  }
};
