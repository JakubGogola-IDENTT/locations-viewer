import { COLORS } from '../../constants/colors';

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
