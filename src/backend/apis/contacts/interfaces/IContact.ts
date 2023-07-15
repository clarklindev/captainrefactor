import mongoose from 'mongoose';

export interface IContact extends Document {
  [key: string]: any; // Index signature allowing any string key

  email: string;
  clientId: mongoose.Types.ObjectId;
  createdAt: number;
  updatedAt: number;

  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  defaultCountryCode?: string;
}
