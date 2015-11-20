var arrayMap = require('./arrayMap'),
    baseFlatten = require('./baseFlatten'),
    baseIteratee = require('./baseIteratee'),
    rest = require('../function/rest');

/**
 * Creates a function like `_.over`.
 *
 * @private
 * @param {Function} arrayFunc The function to iterate over iteratees.
 * @returns {Function} Returns the new invoker function.
 */
function createOver(arrayFunc) {
  return rest(function(iteratees) {
    iteratees = arrayMap(baseFlatten(iteratees), baseIteratee);
    return rest(function(args) {
      var thisArg = this;
      return arrayFunc(iteratees, function(iteratee) {
        return iteratee.apply(thisArg, args);
      });
    });
  });
}

module.exports = createOver;
