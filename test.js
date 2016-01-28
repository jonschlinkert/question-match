'use strict';

require('mocha');
var assert = require('assert');
var match = require('./');
var Questions = require('question-store');
var questions;

describe('questions-match', function() {
  beforeEach(function() {
    questions = new Questions();
    questions.use(match());
  });

  it('should export a function', function() {
    assert.equal(typeof match, 'function');
  });

  it('should add a `/match` method to `questions`', function() {
    assert.equal(typeof questions.match, 'function');
  });
});
