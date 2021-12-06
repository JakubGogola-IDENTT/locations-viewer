import { CSV_DATA_ACQUIRED } from '../constants/actions';

const initalState = {
    csvData: null,
};

/**
 * @typedef {{csvData: object|null}} CsvState
 * @param {CsvState} state
 * @param {{type: string}} action
 * @returns {CsvState}
 */
export const csv = (state = initalState, action) => {
    switch (action.type) {
        case CSV_DATA_ACQUIRED:
            return {
                ...state,
                csvData: action.csvData,
            };
        default:
            return state;
    }
};
