import { PhoneNumber, PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';

// Get an instance of `PhoneNumberUtil`.
const phoneUtil = PhoneNumberUtil.getInstance();

export const isPhoneNumber = (value: PhoneNumber) => {
  if (!value) {
    // Return undefined if the value is empty
    return undefined;
  }
  const isValidNumber = phoneUtil.isValidNumberForRegion(phoneUtil.parse(value.toString(), 'US'), 'US');
  if (!isValidNumber) {
    return 'not a valid USA number';
  }

  const formatted = phoneUtil.format(value, PhoneNumberFormat.E164);
  return formatted;
};
