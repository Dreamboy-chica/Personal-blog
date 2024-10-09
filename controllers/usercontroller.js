let umodel = require("../models/usermodel");
let bcrypt = require("bcrypt");

let register = async (req, res) => {
  try {
    let hash = await bcrypt.hash(req.body.pwd, 10);
    let data = new umodel({ ...req.body, pwd: hash });
    await data.save();
    res.json({ message: "Registration Done" });
  } catch (err) {
    res.json({ message: "Error in Registration" });
  }
};

module.exports = { register };
