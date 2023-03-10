import bcrypt from 'bcrypt';
import User from '../model/user.js';
import errorFunc from '../utils/errorFunc.js';

const checkEmail = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    next();
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

const signupController = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create our new user
    const newUser = await User.create({ firstname, lastname, email, password: hashedPassword });
    res.status(201).json({
      message: "New User created successfully",
      data: newUser
    });
  } catch (error) {

    const messageContent = error.message;
    const status = 500;
    errorFunc(res, messageContent, status);
  }

};

export { signupController, checkEmail };
