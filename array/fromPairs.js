import baseSet from '../internal/baseSet';
import isArray from '../lang/isArray';

/**
 * The inverse of `_.toPairs`; this method returns an object composed from arrays
 * of property names and values. Provide either a single two dimensional array,
 * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
 * and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} props The property names.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['fred', 30], ['barney', 40]]);
 * // => { 'fred': 30, 'barney': 40 }
 *
 * _.fromPairs(['fred', 'barney'], [30, 40]);
 * // => { 'fred': 30, 'barney': 40 }
 */
function fromPairs(props, values) {
  var index = -1,
      length = props ? props.length : 0,
      result = {};

  if (length && !values && !isArray(props[0])) {
    values = [];
  }
  while (++index < length) {
    var key = props[index];
    if (values) {
      baseSet(result, key, values[index]);
    } else if (key) {
      baseSet(result, key[0], key[1]);
    }
  }
  return result;
}

export default fromPairs;
