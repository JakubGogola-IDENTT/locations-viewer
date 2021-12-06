import { CSV_DATA_ACQUIRED } from '../../constants/actions';

/**
 * @typedef {Array<Array<*>>} CsvData
 * @param {CsvData} data
 * @returns {{type: 'CSV_DATA_ACQUIRED', data: CsvData}}
 */
export const csvDataAcquired = data => ({
    type: CSV_DATA_ACQUIRED,
    data,
});
