
import { fromJS } from 'immutable';
import detailRecordReducer from '../reducer';

describe('detailRecordReducer', () => {
  it('returns the initial state', () => {
    expect(detailRecordReducer(undefined, {})).toEqual(fromJS({}));
  });
});
