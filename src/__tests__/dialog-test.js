jest.dontMock('../index');

const test = require('../index').default;

describe('dialog', () => {
  it('should return true', () => {
    expect(test()).toEqual(true);
  });
});
