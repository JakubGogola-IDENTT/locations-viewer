export const LABELS = {
    CITY: 'city',
    STATE: 'state',
    ZIP: 'zip',
    ADDRESS: 'address',
    CATEGORY: 'category',
    getAll: () => Object.values(LABELS).filter(v => typeof v === 'string'),
};
