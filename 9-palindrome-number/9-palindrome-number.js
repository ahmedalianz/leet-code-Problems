/**
 * @param {number} x
 * @return {boolean}
 */
  var isPalindrome = function (x) {
    const reversed = x.toString().split("").reverse().join("");
    if (x.toString() === reversed) return true;
    return false;
  };