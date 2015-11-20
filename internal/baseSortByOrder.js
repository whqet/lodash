import arrayMap from './arrayMap';
import baseIteratee from './baseIteratee';
import baseMap from './baseMap';
import baseSortBy from './baseSortBy';
import compareMultiple from './compareMultiple';

/**
 * The base implementation of `_.sortByOrder` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseSortByOrder(collection, iteratees, orders) {
  var index = -1;

  iteratees = arrayMap(iteratees.length ? iteratees : Array(1), function(iteratee) {
    return baseIteratee(iteratee);
  });

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

export default baseSortByOrder;
