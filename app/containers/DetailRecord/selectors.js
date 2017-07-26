import { createSelector } from 'reselect';

/**
 * Direct selector to the detailRecord state domain
 */
const selectDetailRecordDomain = () => (state) => state.get('detailRecord');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DetailRecord
 */

const makeSelectDetailRecord = () => createSelector(
  selectDetailRecordDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDetailRecord;
export {
  selectDetailRecordDomain,
};
