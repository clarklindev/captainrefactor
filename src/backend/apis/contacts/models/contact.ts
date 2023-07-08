import mongoose, { Document, Schema } from 'mongoose';
import DateHelper from '../../../../fundamentals/classes/DateHelper';

export interface IContact extends Document {
  clientId: mongoose.Types.ObjectId;
  createdAt: number;
  updatedAt: number;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
}

const contactSchema = new Schema<IContact>(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },

    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'Contact',
      required: true,
    },

    createdAt: {
      type: Number,
      immutable: true, //means cant change
      default: () => DateHelper.jsDateNowToUnixEpoch(Date.now()), //time in seconds since unix epoc
    },
    updatedAt: {
      type: Number,
      default: () => DateHelper.jsDateNowToUnixEpoch(Date.now()), //time in seconds since unix epoc
    },
  },

  { timestamps: false, strict: false, shardKey: { clientId: 1 } } //1 ascending, -1 descending
);

export default mongoose.model<IContact>('Contact', contactSchema);
