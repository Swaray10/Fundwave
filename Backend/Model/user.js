import mongoose from "mongoose";
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt'

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },

    capitalCity: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },

    campaigns: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign'
    }]
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model('User', userSchema);

export default User;