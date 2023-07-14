export const floatWithTwoDecimals = (value: string) => {
  if (!value) {
    // Return undefined if the value is empty
    return undefined;
  }

  if (!/^\d+(\.\d{2})?$/.test(value)) {
    // Return an error message if the value doesn't match the pattern
    return 'must be a float with exactly two decimal places';
  }
};
