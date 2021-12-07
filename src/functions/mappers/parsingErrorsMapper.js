/**
 * @param {{message: string}[]} errors
 * @returns {string[]}
 */
export const parsingErrorsMapper = errors =>
    errors.map(({ message }) => message);
