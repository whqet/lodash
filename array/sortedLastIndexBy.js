import baseIteratee from '../internal/baseIteratee';
import binaryIndexBy from '../internal/binaryIndexBy';

/**
 * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted into `array`.
 * @example
 *
 * // using the `_.property` callback shorthand
 * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
 * // => 1
 */
function sortedLastIndexBy(array, value, iteratee) {
  return binaryIndexBy(array, value, baseIteratee(iteratee), true);
}

export default sortedLastIndexBy;
