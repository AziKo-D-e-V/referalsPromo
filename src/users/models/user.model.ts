import { Schema, model } from 'mongoose';

export const userschema : Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model('User', userschema);
