import express from 'express';
import { createContact, getContact, updateContact, deleteContact, getContacts } from '../controllers';
import { body } from 'express-validator';

import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
// Get an instance of `PhoneNumberUtil`.
const phoneUtil = PhoneNumberUtil.getInstance();

const validateContact = [
  body('email')
    .notEmpty()
    .trim()
    .isEmail()
    .isLength({ min: 3 })
    .isAlphanumeric()
    .withMessage('Please enter a valid email')
    .normalizeEmail({ gmail_remove_dots: false }),
  body('firstName').optional().isString(),
  body('lastName').optional().isString(),
  body('phoneNumber')
    .optional()
    .customSanitizer((value) => {
      // In this app, users have MongoDB style object IDs, everything else, numbers
      return phoneUtil.format(value, PhoneNumberFormat.E164);
    }),
];

const router = express.Router();

router.post('/', validateContact, createContact);
router.get('/:id', getContact);
router.patch('/:id', validateContact, updateContact);
router.delete('/:id', deleteContact);

router.get('/by/:clientId', getContacts);

export default router;
