const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");
  return arr[Math.floor(Math.random() * arr.length)];
};

const findQuotesByPerson = (arr, person) => {
  const quotes = arr.filter((quote) => {
    return quote.person === person;
  });
  return quotes;
};

module.exports = {
  getRandomElement,
  findQuotesByPerson,
};
