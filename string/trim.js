var charsEndIndex = require('../internal/charsEndIndex'),
    charsStartIndex = require('../internal/charsStartIndex'),
    stringToArray = require('../internal/stringToArray'),
    toString = require('../lang/toString'),
    trimmedEndIndex = require('../internal/trimmedEndIndex'),
    trimmedStartIndex = require('../internal/trimmedStartIndex');

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (!string) {
    return string;
  }
  if (guard || chars === undefined) {
    return string.slice(trimmedStartIndex(string), trimmedEndIndex(string) + 1);
  }
  chars = (chars + '');
  if (!chars) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars);

  return strSymbols.slice(charsStartIndex(strSymbols, chrSymbols), charsEndIndex(strSymbols, chrSymbols) + 1).join('');
}

module.exports = trim;
