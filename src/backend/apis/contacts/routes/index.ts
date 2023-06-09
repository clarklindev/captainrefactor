import express from 'express';
import { createContact, getContact, updateContact, deleteContact, getContacts } from '../controllers';
const router = express.Router();

router.post('/', createContact);
router.get('/', getContacts);

router.get('/:id', getContact);
router.patch('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
