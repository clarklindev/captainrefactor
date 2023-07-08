class DateHelper {
  static jsDateNowToUnixEpoch(date: number) {
    return Math.floor(date / 1000);
  }

  static unixEpochToRFC3339_ISO8601(unixTimestamp: number) {
    const newDate = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    return newDate.toISOString();
  }
}

export default DateHelper;
