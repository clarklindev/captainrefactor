import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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
      immutable: true, //means cant change
      default: () => Date.now(),
    },
    updatedAt: {
      type: Number,
      default: () => Date.now(),
    },
  },

  { timestamps: false, strict: false, shardKey: { clientId: 1 } } //1 ascending, -1 descending
);

export default mongoose.model('Contact', contactSchema);
