import LazyWrapper from '../internal/LazyWrapper';
import LodashWrapper from '../internal/LodashWrapper';
import baseAt from '../internal/baseAt';
import baseFlatten from '../internal/baseFlatten';
import isIndex from '../internal/isIndex';
import rest from '../function/rest';
import thru from './thru';

/**
 * Creates a wrapped array of values corresponding to `paths` of the wrapped object.
 *
 * @name at
 * @memberOf _
 * @category Chain
 * @param {...(string|string[])} [paths] The property paths of elements to pick,
 *  specified individually or in arrays.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * _(object).at(['a[0].b.c', 'a[1]']);
 * // => [3, 4]
 *
 * _(['a', 'b', 'c']).at(0, 2);
 * // => ['a', 'c']
 */
var wrapperAt = rest(function(paths) {
  paths = baseFlatten(paths);
  var length = paths.length,
      start = length ? paths[0] : 0,
      value = this.__wrapped__,
      interceptor = function(object) { return baseAt(object, paths); };

  if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
    return this.thru(interceptor);
  }
  value = value.slice(start, +start + (length ? 1 : 0));
  value.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
  return new LodashWrapper(value, this.__chain__).thru(function(object) {
    if (length && !object.length) {
      object.push(undefined);
    }
    return object;
  });
});

export default wrapperAt;
