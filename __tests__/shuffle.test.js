const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('does shuffle return an array', () => {
    expect(shuffle()).toEqual([]);
  })
  test('does shuffle return an array of the same length as the argument sent in', () => {
    expect(shuffle([1,2,3,4,5])).toHaveLength(5)
  })
});
