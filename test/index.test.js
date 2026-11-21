'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { formatNames } = require('../index.js');

test('joins a non-empty array of names with a comma and space', () => {
  assert.equal(formatNames(['Ada', 'Grace', 'Linus']), 'Ada, Grace, Linus');
});

test('returns "No names provided" for an empty array', () => {
  assert.equal(formatNames([]), 'No names provided');
});
