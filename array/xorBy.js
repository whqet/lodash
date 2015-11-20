import arrayFilter from '../internal/arrayFilter';
import baseIteratee from '../internal/baseIteratee';
import baseXor from '../internal/baseXor';
import isArrayLikeObject from '../lang/isArrayLikeObject';
import last from './last';
import rest from '../function/rest';

/**
 * This method is like `_.xor` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by which
 * uniqueness is computed. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function|Object|string} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of values.
 * @example
 *
 * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
 * // => [1.2, 4.3]
 *
 * // using the `_.property` callback shorthand
 * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 2 }]
 */
var xorBy = rest(function(arrays) {
  var iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseXor(arrayFilter(arrays, isArrayLikeObject), baseIteratee(iteratee));
});

export default xorBy;
