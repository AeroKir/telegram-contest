/**
 * Get date and month in shorthand format
 * Like a '19 февр' for 'ru' locale, for example
 */
// const getDateAndMonth = (gottenTime) => {
//   const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//   };
//   const localeTimeString = new Date(gottenTime * 1000).toLocaleTimeString([], options);
//   return localeTimeString;
// };

const getDateAndMonth = (gottenTime) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const dateAndMonth = new Date(gottenTime * 1000).toLocaleString('en-US', options);
  return dateAndMonth;
};

export default getDateAndMonth;
