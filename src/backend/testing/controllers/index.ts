import fs from 'fs';
import path from 'path';
import { NextFunction, Request, Response } from 'express';

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'clark',
    email: 'clark@test.com',
    password: 'password',
  },
  {
    id: 'u2',
    name: 'Ted',
    email: 'ted@test.com',
    password: 'password',
  },
  { id: 'u3', name: 'Ben', email: 'ben@test.com', password: 'password' },
  { id: 'u4', name: 'Sofie', email: 'sofie@test.com', password: 'password' },
];

export const getRoot = (req: Request, res: Response, next: NextFunction) => {
  res.json({ status: 'Hello, world!' });
};

export const getCurrentTime = (req: Request, res: Response, next: NextFunction) => {
  const now = new Date();
  const dateObj = {
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
    time: now.toLocaleString('en-us', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
  };
  res.send(dateObj);
};

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.json(DUMMY_USERS);
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const foundUser = DUMMY_USERS.find((u) => u.email === email);
  if (!foundUser || foundUser.password !== password) {
    return res.status(422).json({ message: 'Invalid data' });
  }
  return res.status(200).json({ message: 'Logged in!' });
};

// Endpoint to download a specific file
export const downloadFile = (req: Request, res: Response, next: NextFunction) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'files', filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Set the appropriate headers for the response
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Create a read stream from the file and pipe it to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    // File not found
    res.status(404).send('File not found');
  }
};
