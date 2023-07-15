import mongoose, { Schema } from 'mongoose';

import { IContact } from '../interfaces/IContact';
import DateHelper from '../../../../fundamentals/classes/DateHelper';

const contactSchema = new Schema<IContact>(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    defaultCountryCode: {
      type: String,
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
