/**
 * Received a string as a payload and a max length possible that could have it,
 * if the payload's length go above the max length, the function will return the
 * slice string with three dots "..." at the end.
 * @param {string} payload - The string to format.
 * @param {string} maxLength - The max length possible in number.
 * @returns {string} The string formatted.
 */
export const stringFormatter = (payload: string, maxLength: number) => {
  if (payload.length > maxLength) return `${payload.slice(0, maxLength)}...`;
  return payload;
};
