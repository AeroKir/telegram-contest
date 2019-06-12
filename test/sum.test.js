import assert from 'assert';
import { it, describe } from 'mocha';
import sum from '../src/common/sum';

describe('sum', () => {
  it('sum return 2 + 2 = 4', () => {
    assert.equal(sum(2, 2), 4);
  });
  it('sum return 10 + 10 = 20', () => {
    assert.equal(sum(10, 10), 20);
  });
});