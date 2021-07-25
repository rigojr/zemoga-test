export const stringFormatter = (payload: string, maxLength: number) => {
  if (payload.length > maxLength) return `${payload.slice(0, maxLength)}...`;
  return payload;
};
