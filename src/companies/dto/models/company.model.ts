import { Schema, model } from 'mongoose';

export const CompanySchema : Schema = new Schema(
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

export const CompanyModel = model('Company', CompanySchema);
