import baseForOwn from './baseForOwn';
import createBaseEach from './createBaseEach';

/**
 * The base implementation of `_.forEach` without support for callback shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

export default baseEach;
