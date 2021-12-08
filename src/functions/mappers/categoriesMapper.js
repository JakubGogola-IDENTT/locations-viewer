import { COLORS } from '../../constants/colors';

/**
 * @param {{category: string}[]} locationsList
 * @returns {Object<string, string>}
 */
export const categoriesMapper = locationsList => {
    const distinctCategories = [
        ...new Set(locationsList.map(({ category }) => category)),
    ];
    const colors = COLORS.getAll();

    return distinctCategories.reduce(
        (acc, category, idx) => ({
            ...acc,
            [category]: colors[idx],
        }),
        {}
    );
};
