import { makeStyles } from '../functions';

/**
 * @param {object} styles
 * @param {Node} Component
 * @returns {import('@material-ui/styles').ClassNameMap}
 */
export const useStyles = (styles, Component) =>
    makeStyles(styles, Component, 'rt');
