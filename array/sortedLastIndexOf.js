import binaryIndex from '../internal/binaryIndex';

/**
 * This method is like `_.lastIndexOf` except that it performs a binary
 * search on a sorted `array`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.sortedLastIndexOf([1, 1, 2, 2], 2);
 * // => 3
 */
function sortedLastIndexOf(array, value) {
  var length = array ? array.length : 0;
  if (length) {
    var index = binaryIndex(array, value, true) - 1,
        other = array[index];

    if (value === value ? (value === other) : (other !== other)) {
      return index;
    }
  }
  return -1;
}

export default sortedLastIndexOf;
