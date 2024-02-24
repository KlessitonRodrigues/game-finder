export const formatDateString = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en', { dateStyle: 'medium' });
};
