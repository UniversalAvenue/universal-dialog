jest.dontMock('../actor');

const actor = require('../actor').default;

describe('actor', () => {
  const onRetort = jest.genMockFn();
  actor.on('retort', onRetort);
  it('should talk back', () => {
    actor.talkTo();
    expect(onRetort.mock.calls[0][0]).toEqual('Nice to meet you');
  });
  it('should respond a couple of times', () => {
    actor.talkTo();
    expect(onRetort.mock.calls[1][0]).toEqual('Go on');
    actor.talkTo();
    expect(onRetort.mock.calls[2][0]).toEqual('Go on');
  });
  it('should be interested', () => {
    actor.talkTo();
    expect(onRetort.mock.calls[3][0]).toEqual('This sounds interesting');
  });
});
