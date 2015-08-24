var baseTimes = require('../internal/baseTimes'),
    isIterateeCall = require('../internal/isIterateeCall'),
    toNumber = require('../lang/toNumber');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. If `end` is not specified it's
 * set to `start` with `start` then set to `0`. If `end` is less than `start`
 * a zero-length range is created unless a negative `step` is specified.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the new array of numbers.
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
function range(start, end, step) {
  if (step && isIterateeCall(start, end, step)) {
    end = step = undefined;
  }
  start = toNumber(start);
  start = start === start ? start : 0;
  step = step === undefined ? 1 : (toNumber(step) || 0);

  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toNumber(end) || 0;
  }
  var n = nativeMax(nativeCeil((end - start) / (step || 1)), 0);
  return baseTimes(n, function(index) {
    return index ? (start += step) : start;
  });
}

module.exports = range;
