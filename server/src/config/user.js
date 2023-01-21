import mongoose from "mongoose";

export const userCollection = "trainer";

export const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
  },

  name: String,
  avatar: String,
});
