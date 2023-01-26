import User from "../model/User.js";
import jwt from "jsonwebtoken";
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).populate("Link");
    res.status(200).send({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = { ...req.body };
    await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const removeUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({
      success: true,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const getUserByObject = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send({
        success: false,
        error: "Invalid password",
      });
    }
    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      "secret"
    );
    res.status(200).send({
      success: true,
      data: user,
      token,
    });
    // if (user) {
    //   if (user.password !== password) {
    //     throw new Error("Email or password wrong");
    //   }
    //   res.status(200).send({
    //     data: user,
    //     token: token,
    //   });
    // } else {
    //   res.status(404).send({
    //     data: "tiim user bhq bn",
    //   });
    // }
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
