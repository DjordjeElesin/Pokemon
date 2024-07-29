const generateRandomNumbers = (length) => {
  return Array.from({ length }, () => {
    let number;
    do {
      number = Math.floor(Math.random() * 1025);
    } while (number === 0);
    return number;
  });
};

export default generateRandomNumbers;
