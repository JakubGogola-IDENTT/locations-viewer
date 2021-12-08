/**
 * @param {string|null} state
 * @param {string|null} city
 * @param {string|null} zip
 * @param {string|null} address
 * @returns {string}
 */
export const buildAddress = (state, city, zip, address) =>
    [state, city, zip, address].filter(v => !!v).join(' ');
