import { STATE_CLEARED } from '../../constants/actions';

/**
 * @returns {{type: 'STATE_CLEARED'}}
 */
export const stateCleared = () => ({
    type: STATE_CLEARED,
});
