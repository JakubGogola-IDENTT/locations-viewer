import { makeStyles as makeStylesFunction } from '@material-ui/styles';
import { classNameGeneratorFactory } from './classNameGeneratorFactory';

/**
 * @param {object} styles
 * @param {Node} Component
 * @param {string} prefix
 * @returns {import('@material-ui/styles').ClassNameMap}
 */
export const makeStyles = (styles, Component, prefix) =>
    makeStylesFunction(styles, {
        name: Component.name,
        generateClassName: classNameGeneratorFactory(prefix),
    });
