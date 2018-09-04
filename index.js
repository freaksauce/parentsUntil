/*!
 * Get all of an element's parent elements up the DOM tree until a matching parent is found
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} parent   The selector for the parent to stop at
 * @param  {String} filter   The selector to filter against [optional]
 * @return {Array}           The parent elements
 */
module.exports = function parentsUntil(elem, parent, filter) {
  // matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
  }
  // Setup parents array
  const parents = []
  // Get matching parent elements
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (parent) {
      if (elem.matches(parent)) break
    }

    if (filter) {
      if (elem.matches(filter)) {
        parents.push(elem)
      }
      continue
    }
    parents.push(elem)
  }
  return parents
}
