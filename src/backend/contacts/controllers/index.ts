import Contact from '../models/contact';
import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';

export const createContact = async (req: Request, res: Response, next: NextFunction) => {
  const clientId = req.query.clientId as string;

  // this will be one contact for clientId
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;

  const contact = new Contact({
    firstName,
    lastName,
    email,
    phoneNumber,
    clientId: new mongoose.Types.ObjectId(clientId),
  });

  try {
    await contact.save();
    res.status(200).json({ status: 'CONTACT CREATED' });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
};

export const getContact = async (req: Request, res: Response, next: NextFunction) => {
  const clientId = req.query.clientId;
  console.log('clientId: ', clientId);

  const queryContact = req.params.id;
  console.log('queryContact: ', queryContact);
  try {
    const contact = await Contact.where({ clientId: clientId }).where({
      _id: queryContact,
    });
    console.log('CONTACT: ', contact);
    res.json({ contact });
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err });
  }
};

export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
  const clientId = req.query.clientId;
  console.log('clientId: ', clientId);

  const queryContact = req.params.id;
  console.log('queryContact: ', queryContact);
  try {
    const result = await Contact.findOneAndUpdate(
      {
        clientId: clientId,
        _id: queryContact,
      },
      { ...req.body, updatedAt: new Date().getTime() },
      { timestamps: false, strict: false }
    );
    res.json({ status: 'PRODUCT EDITED', result });
  } catch (err) {
    console.log(err);
    return res.json({ status: 'NOT FOUND' });
  }
};

export const deleteContact = async (req: Request, res: Response, next: NextFunction) => {
  const clientId = req.query.clientId;
  console.log('clientId: ', clientId);

  const queryContact = req.params.id;
  console.log('queryContact: ', queryContact);
  try {
    const result = await Contact.findOneAndDelete({
      clientId: clientId,
      _id: queryContact,
    });
    res.json({ status: 'PRODUCT DELETED', result });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ status: 'NOT FOUND' });
  }
};