const precision = 5;

/**
 * @param {number} number Result in number
 * @returns {string} Result in string. Format see in tests
 * */
export const formatResult = (number) => {
  const [wholePart] = number.toString().split('.');

  if (wholePart.length === 1 && wholePart !== '0') {
    return number.toFixed(precision).replace('.', ',').replace(/\.?0+$/, '');
  }

  return number.toExponential(precision).toString().replace('.', ',').replace(/\.?0+e/, 'e');
};
