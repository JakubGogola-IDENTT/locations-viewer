import { locationsParsed } from '../actions/locations';
import { stateCleared } from '../actions/common';
import { LABELS } from '../constants/labels';
import { locations } from './locations';

describe('reducers > locations', () => {
    describe('should handle action', () => {
        it('locations parsed', () =>
            expect(
                locations(
                    undefined,
                    locationsParsed([
                        {
                            [LABELS.ADDRESS]: 'One Intenational Plase',
                            [LABELS.CATEGORY]: 'MyCategory',
                            [LABELS.CITY]: 'Boston',
                            [LABELS.STATE]: 'Massachusetts',
                            [LABELS.ZIP]: '00387',
                        },
                    ])
                )
            ).toEqual({
                locationsList: [
                    {
                        [LABELS.ADDRESS]: 'One Intenational Plase',
                        [LABELS.CATEGORY]: 'MyCategory',
                        [LABELS.CITY]: 'Boston',
                        [LABELS.STATE]: 'Massachusetts',
                        [LABELS.ZIP]: '00387',
                    },
                ],
            }));

        it('state cleared', () =>
            expect(
                locations(
                    {
                        locationsList: [
                            {
                                [LABELS.ADDRESS]: 'One Intenational Plase',
                                [LABELS.CATEGORY]: 'MyCategory',
                                [LABELS.CITY]: 'Boston',
                                [LABELS.STATE]: 'Massachusetts',
                                [LABELS.ZIP]: '00387',
                            },
                        ],
                    },
                    stateCleared()
                )
            ).toEqual({
                locationsList: [],
            }));

        it('unknown', () =>
            expect(locations(undefined, { type: 'UNKNOWN' })).toEqual({
                locationsList: [],
            }));
    });
});
