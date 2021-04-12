/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr;
  const test = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      test.push(array[i]);
      test.sort((a, b) => a - b);
    }
  }
  for (let j = 0; j < test.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== -1) {
        array[i] = test[j];
        j++;
      }
    }
  }
  return array;
}

module.exports = sortByHeight;
