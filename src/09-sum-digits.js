/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const number = n.toString().split('');
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    number[i] = Number(number[i]);
    sum += number[i];
  }
  if (sum < 10) {
    return sum;
  }
  let resSum = 0;
  sum = sum.toString().split('');
  for (let i = 0; i < sum.length; i++) {
    sum[i] = Number(sum[i]);
    resSum += sum[i];
  }
  return resSum;
}

module.exports = getSumOfDigits;
