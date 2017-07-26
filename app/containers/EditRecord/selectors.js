import { createSelector } from 'reselect';

/**
 * Direct selector to the editRecord state domain
 */
const selectEditRecordDomain = () => (state) => state.get('editRecord');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditRecord
 */

const makeSelectEditRecord = () => createSelector(
  selectEditRecordDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEditRecord;
export {
  selectEditRecordDomain,
};
