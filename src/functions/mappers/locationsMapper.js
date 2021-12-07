/**
 * @param {Object<number, string>} assignments
 * @param {Array<Array<string>>} csvData
 * @returns {Array<Object<string, string>>}
 */
export const locationsMapper = (assignments, csvData) => {
    const labels = Object.values(assignments);

    return csvData.map(row =>
        labels.reduce(
            (acc, label, idx) => ({
                ...acc,
                [label]: row[idx],
            }),
            {}
        )
    );
};
