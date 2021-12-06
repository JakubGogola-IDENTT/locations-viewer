export const TOAST_VARIANTS = {
    SUCCESS: 'success',
    ERROR: 'error',
    getAll: () =>
        Object.values(TOAST_VARIANTS).filter(v => typeof v === 'string'),
};
