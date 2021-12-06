export const COLUMN_LABELS = {
    CITY: 'CITY',
    STATE: 'STATE',
    ZIP: 'ZIP',
    ADDRESS: 'ADDRESS',
    CATEGORY: 'CATEGORY',
    getAll: () =>
        Object.values(COLUMN_LABELS).filter(v => typeof v === 'string'),
};
