import { stateCleared } from '../actions/common';
import { csvDataAcquired } from '../actions/csv';
import { csv } from './csv';

describe('reducers > csv', () => {
    describe('should handle action', () => {
        it('CSV data acquired', () =>
            expect(
                csv(
                    undefined,
                    csvDataAcquired([
                        ['value1', 'value2'],
                        ['value1', 'value2'],
                    ])
                )
            ).toEqual({
                data: [
                    ['value1', 'value2'],
                    ['value1', 'value2'],
                ],
            }));

        it('state cleared', () =>
            expect(
                csv(
                    {
                        data: [
                            ['value1', 'value2'],
                            ['value1', 'value2'],
                        ],
                    },
                    stateCleared()
                )
            ).toEqual({
                data: null,
            }));

        it('unknown', () =>
            expect(csv(undefined, { type: 'UNKNOWN' })).toEqual({
                data: null,
            }));
    });
});
