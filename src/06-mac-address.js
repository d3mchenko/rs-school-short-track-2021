/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const macAddress = n.split('-');
  const reg1 = new RegExp('^[a-zA-Z]');
  const reg2 = new RegExp('^[a-zA-Z]');
  let bool = false;

  if (macAddress.length === 6) {
    macAddress.forEach((el) => {
      if (el.length === 2) {
        if ((reg1.test(el[0]) && reg2.test(el[1])) || ((reg1.test(el[1]) && reg2.test(el[0])))) {
          bool = true;
        } else {
          bool = false;
        }
      }
    });
  }
  return bool;
}

module.exports = isMAC48Address;
