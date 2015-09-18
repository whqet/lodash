import baseToPath from './baseToPath';
import isKey from './isKey';
import last from '../array/last';
import parent from './parent';

/**
 * Invokes the method at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */
function invokePath(object, path, args) {
  if (!isKey(path, object)) {
    path = baseToPath(path);
    object = parent(object, path);
    path = last(path);
  }
  var func = object == null ? object : object[path];
  return func == null ? undefined : func.apply(object, args);
}

export default invokePath;
