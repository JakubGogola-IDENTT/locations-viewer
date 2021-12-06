import { CSV_DATA_ACQUIRED } from '../../constants/actions';

export const csvDataAcquired = data => ({
    type: CSV_DATA_ACQUIRED,
    data,
});
