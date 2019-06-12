import assert from 'assert';
import { it, describe } from 'mocha';
import getNormalizedData from '../src/data/data-normalization';

describe('getNormalizedData', () => {
  it('return normalized value first argument', () => {
    assert.equal(getNormalizedData(30, 5, 100, 0, 500), 131.5789);
  });
  it('return normalized value first argument', () => {
    assert.equal(getNormalizedData(0, 0, 0, 0, 0), 0);
  });
});
