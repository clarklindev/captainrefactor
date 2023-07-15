import { Request } from 'express';

export interface IRequest extends Request {
  body: {
    data?: {
      attributes: {
        email: string;
        firstName?: string;
        lastName?: string;
        phoneNumber?: string;
        defaultCountryCode?: string;
      };
    };
  };
}
