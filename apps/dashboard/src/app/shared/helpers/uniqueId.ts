export const uniqueId = (prefix?: string) => {
  const id = Math.random().toString(36).substring(2, 9);

  return prefix ? `${prefix}-${id}` : id;
};
