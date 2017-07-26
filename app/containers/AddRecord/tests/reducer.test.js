
import { fromJS } from 'immutable';
import addRecordReducer from '../reducer';

describe('addRecordReducer', () => {
  it('returns the initial state', () => {
    expect(addRecordReducer(undefined, {})).toEqual(fromJS({}));
  });
});
