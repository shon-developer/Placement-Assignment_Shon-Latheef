import User from "../models/userSchema.js";

export const signup = async (req, res) => {
  //get data from the user
  const { name, lastName, email, password } = req.body;
  // validate
  if (!name || !lastName || !email || !password) {
    return res.json({ error: "All the fields are required" });
  }
  try {
    // check if the user already exists
    const existingUser = await User.findOne({ email });
    // if user already existing throw an error
    if (existingUser) {
      res.status(200).json({
        success: true,
        message: "Already signed up, Please login",
      });
    }
    67;
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error is signing up",
      error,
    });
  }
};
