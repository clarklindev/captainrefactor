import { PhoneNumber, PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';

// Get an instance of `PhoneNumberUtil`.
const phoneUtil = PhoneNumberUtil.getInstance();

export const isPhoneNumber = (value: PhoneNumber, options: Object = {}) => {
  if (!value) {
    // Return undefined if the value is empty
    return undefined;
  }

  //check if there is a country code on the passed in number
  //get alpha code from country code.

  const isValidNumber = phoneUtil.isValidNumberForRegion(phoneUtil.parse(value.toString(), 'US'), 'US');
  if (!isValidNumber) {
    return 'not a valid USA number';
  }

  const formatted = phoneUtil.format(value, PhoneNumberFormat.E164);
  return formatted;
};
