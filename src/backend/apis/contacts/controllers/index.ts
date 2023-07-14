import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';
import validate from 'validate.js';

import Contact from '../models/contact';
import DateHelper from '../../../../fundamentals/classes/DateHelper';
import { IContact } from '../../../interfaces/IContact';
import { IRequest } from '../../../interfaces/IRequest';
import { isPhoneNumber } from '../../../validation/phoneNumber';

const constraints = {
  email: {
    email: true,
    presence: true,
  },
  firstName: {
    type: 'string',
    length: {
      minimum: 2,
      maximum: 50,
      message: 'must be between 2 and 50 characters',
    },
    format: {
      pattern: /^[a-zA-Z\s']+$/,
      message: 'can only contain letters, spaces, and apostrophes',
    },
  },
  lastName: {
    type: 'string',
    length: {
      minimum: 2,
      maximum: 50,
      message: 'must be between 2 and 50 characters',
    },
    format: {
      pattern: /^[a-zA-Z\s']+$/,
      message: 'can only contain letters, spaces, and apostrophes',
    },
  },
  phoneNumber: {
    isPhoneNumber: true,
  },
};

export const createContact = async (req: IRequest, res: Response, next: NextFunction) => {
  const reqClientId = req.query.clientId as string;

  if (req.body.data) {
    const attributes: IContact = {};
    for (const [key, value] of Object.entries(req.body.data.attributes)) {
      attributes[key] = value;
    }

    //add custom validator
    validate.validators.isPhoneNumber = isPhoneNumber;

    //validate
    const trimmedInput = validate.cleanAttributes(attributes, constraints); //trim whitespace
    const validationErrors = validate(trimmedInput, constraints);

    if (validationErrors) {
      // Handle validation errors
      return res.status(500).json({ validationErrors: validationErrors });
    }

    console.log('Validation passed');

    const contact = new Contact({
      ...attributes,
      clientId: new mongoose.Types.ObjectId(reqClientId),
    });

    try {
      if (contact) {
        await contact.save();
        const { _id, clientId, createdAt, updatedAt, __v, ...attributes } = contact.toObject();

        const response = {
          data: {
            id: _id.toString(),
            type: 'contacts',
            attributes: {
              ...attributes,
              timestamps: {
                created: DateHelper.unixEpochToRFC3339_ISO8601(createdAt),
                modified: DateHelper.unixEpochToRFC3339_ISO8601(updatedAt),
              },
            },
            links: {
              self: `/contacts/${clientId}`,
            },
            relationships: {
              clientId: {
                data: {
                  id: clientId,
                  type: 'contacts',
                },
              },
            },
          },
        };

        res.status(201).json(response);
      }
    } catch (errors: any) {
      if (!res.status) {
        res.status(500);
      }
      next(errors);
    }
  }
};

export const getContacts = async (req: Request, res: Response) => {
  const reqClientId = req.query.clientId as string;

  const contacts = await Contact.find({ clientId: reqClientId }).lean();
  res.status(200).json({ contacts });
};

export const getContact = async (req: Request, res: Response) => {
  try {
    const reqClientId = req.query.clientId;
    const reqQueryContact = req.params.id;

    const contact = await Contact.findOne({ clientId: reqClientId, _id: reqQueryContact }).lean();

    if (contact) {
      const { _id, clientId, createdAt, updatedAt, ...attributes } = contact;
      const response = {
        data: {
          id: _id,
          type: 'contacts',
          attributes: {
            ...attributes,
            timestamps: {
              created: DateHelper.unixEpochToRFC3339_ISO8601(createdAt),
              modified: DateHelper.unixEpochToRFC3339_ISO8601(updatedAt),
            },
          },
          links: {
            self: `/contacts/${reqQueryContact}?clientId=${reqClientId}`,
          },
          relationships: {
            clientId: {
              data: {
                id: clientId,
                type: 'contacts',
              },
            },
          },
        },
      };

      res.status(200).json(response);
    }
  } catch (errors) {
    res.status(404).json({ errors });
  }
};

export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
  const reqClientId = req.query.clientId as string;
  const reqQueryContact = req.params.id;

  //validation errors
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   const error = new Error('Validation failed');
  //   res.status(422);
  //   throw error;
  // }

  try {
    const updates: IContact = {};
    for (const [key, value] of Object.entries(req.body)) {
      updates[key] = value;
    }

    const contact = await Contact.findOneAndUpdate(
      { clientId: new mongoose.Types.ObjectId(reqClientId), _id: reqQueryContact },
      { ...updates, updatedAt: DateHelper.jsDateNowToUnixEpoch(Date.now()) },
      {
        timeStamps: false,
        lean: true,
        new: true,
      }
    );

    if (contact) {
      const response = {
        data: {
          id: contact._id,
          type: 'contacts',
          attributes: {
            ...updates,
            timestamps: {
              created: DateHelper.unixEpochToRFC3339_ISO8601(contact.createdAt),
              modified: DateHelper.unixEpochToRFC3339_ISO8601(contact.updatedAt),
            },
          },
        },
      };
      res.status(200).json(response);
    }
  } catch (errors: any) {
    if (!res.status) {
      res.status(500);
    }
    next(errors);
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  const clientId = req.query.clientId;

  const queryContact = req.params.id;
  try {
    const result = await Contact.findOneAndDelete({
      clientId: clientId,
      _id: queryContact,
    });
    res.json({ status: 'PRODUCT DELETED', result });
  } catch (errors) {
    return res.status(404).json({ errors });
  }
};
