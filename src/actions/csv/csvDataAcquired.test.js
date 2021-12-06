import { CSV_DATA_ACQUIRED } from '../../constants/actions';
import { csvDataAcquired } from './csvDataAcquired';

describe('actions > csv > csvDataAcquired', () => {
    it('should create an action', () =>
        expect(
            csvDataAcquired([
                ['value1', 'value2'],
                ['value1', 'value2'],
            ])
        ).toEqual({
            type: CSV_DATA_ACQUIRED,
            data: [
                ['value1', 'value2'],
                ['value1', 'value2'],
            ],
        }));
});
