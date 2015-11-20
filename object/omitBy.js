import baseIteratee from '../internal/baseIteratee';
import basePickBy from '../internal/basePickBy';

/**
 * The opposite of `_.pickBy`; this method creates an object composed of the
 * own and inherited enumerable properties of `object` that `predicate`
 * doesn't return truthy for.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'user': 'fred' }
 */
function omitBy(object, predicate) {
  predicate = baseIteratee(predicate);
  return basePickBy(object, function(value) {
    return !predicate(value);
  });
}

export default omitBy;
