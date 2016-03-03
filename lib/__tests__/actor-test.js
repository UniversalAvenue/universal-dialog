'use strict';

jest.dontMock('../actor');

var actor = require('../actor').default;

describe('actor', function () {
  var onRetort = jest.genMockFn();
  actor.on('retort', onRetort);
  it('should talk back', function () {
    actor.talkTo();
    expect(onRetort.mock.calls[0][0]).toEqual('Nice to meet you');
  });
  it('should respond a couple of times', function () {
    actor.talkTo();
    expect(onRetort.mock.calls[1][0]).toEqual('Go on');
    actor.talkTo();
    expect(onRetort.mock.calls[2][0]).toEqual('Go on');
  });
  it('should be interested', function () {
    actor.talkTo();
    expect(onRetort.mock.calls[3][0]).toEqual('This sounds interesting');
  });
});