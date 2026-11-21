'use strict';

function formatNames(names) {
  if (names.length === 0) {
    return '';
  }
  return names.join(', ');
}

module.exports = { formatNames };
