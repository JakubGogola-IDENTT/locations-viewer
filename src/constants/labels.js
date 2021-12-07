export const LABELS = {
    CITY: 'CITY',
    STATE: 'STATE',
    ZIP: 'ZIP',
    ADDRESS: 'ADDRESS',
    CATEGORY: 'CATEGORY',
    getAll: () => Object.values(LABELS).filter(v => typeof v === 'string'),
};
