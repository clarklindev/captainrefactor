import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const currentTime = () => {
  return Math.floor(new Date().getTime() / 1000); //.getTime() uses Unix Epoch
};

const contactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },

    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'Contact',
      required: true,
    },

    createdAt: {
      type: Number,
      default: currentTime,
    },
    updatedAt: {
      type: Number,
      default: currentTime,
    },
  },

  { timestamps: false, strict: false }
);

const model = mongoose.model('Contact', contactSchema);
export default model;
