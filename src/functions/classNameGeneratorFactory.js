import { createGenerateClassName } from '@material-ui/styles';

const generators = {};

/**
 * @param {string} prefix
 * @returns {object}
 */
export const classNameGeneratorFactory = prefix => {
    if (!generators[prefix]) {
        generators[prefix] = createGenerateClassName({
            productionPrefix: prefix,
        });
    }

    return generators[prefix];
};
