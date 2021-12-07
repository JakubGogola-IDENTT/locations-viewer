import { LOCATIONS_PARSED } from '../../constants/actions';

/**
 * @typedef {Array<*>} LocationsList
 * @param {LocationsList} locationsList
 * @returns {{type: 'LOCATIONS_PARSED', locationsList: LocationsList}}
 */
export const locationsParsed = locationsList => ({
    type: LOCATIONS_PARSED,
    locationsList,
});
