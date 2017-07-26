import { createSelector } from 'reselect';

/**
 * Direct selector to the addRecord state domain
 */
const selectAddRecordDomain = () => (state) => state.get('addRecord');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddRecord
 */

const makeSelectAddRecord = () => createSelector(
  selectAddRecordDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAddRecord;
export {
  selectAddRecordDomain,
};
