export const COLUMN_IDS = {
    COL_1: 1,
    COL_2: 2,
    COL_3: 3,
    COL_4: 4,
    COL_5: 5,
    getAll: () => Object.values(COLUMN_IDS).filter(v => typeof v === 'number'),
};
