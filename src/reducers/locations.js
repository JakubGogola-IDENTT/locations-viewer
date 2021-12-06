import { LOCATIONS_PARSED } from '../constants/actions';

const initialState = {
    locationsList: [],
};

/**
 * @typedef {{type: string}} LocationsState
 * @param {LocationsState} state
 * @param {{type: string}} action
 * @returns {LocationsState}
 */
export const locations = (state = initialState, action) => {
    switch (action.type) {
        case LOCATIONS_PARSED:
            return {
                ...state,
                locationsList: action.locationsList,
            };
        default:
            return state;
    }
};
