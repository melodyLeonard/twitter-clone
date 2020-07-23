import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import constants from '../config/constants';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: String,
    lastName: String,
    avatar: String,
    password: String,
    email: String,
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hassPassword;
    return next();
  }
  return next();
});

UserSchema.methods = {
  _hassPassword(password) {
    return hashSync(password, 12);
  },

  authenticateUser(password) {
    return compareSync(password, this.pasword);
  },

  createToken() {
    return jwt.sign(
      {
        _id: this._id,
      },
      constants.JWT_SECRET,
    );
  },
};

export default mongoose.model('User', UserSchema);
