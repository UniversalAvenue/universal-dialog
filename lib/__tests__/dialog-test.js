'use strict';

jest.dontMock('../index');

var test = require('../index').default;

describe('dialog', function () {
  it('should return true', function () {
    expect(test()).toEqual(true);
  });
});