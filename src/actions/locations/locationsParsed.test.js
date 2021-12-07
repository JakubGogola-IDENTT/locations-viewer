import { LOCATIONS_PARSED } from '../../constants/actions';
import { LABELS } from '../../constants/labels';
import { locationsParsed } from './locationsParsed';

describe('actions > locations > locationsParsed', () => {
    it('should create an action', () =>
        expect(
            locationsParsed([
                {
                    [LABELS.ADDRESS]: 'One Intenational Place',
                    [LABELS.CATEGORY]: 'MyCategory',
                    [LABELS.CITY]: 'Boston',
                    [LABELS.STATE]: 'Massachusetts',
                    [LABELS.ZIP]: '00387',
                },
            ])
        ).toEqual({
            type: LOCATIONS_PARSED,
            locationsList: [
                {
                    [LABELS.ADDRESS]: 'One Intenational Place',
                    [LABELS.CATEGORY]: 'MyCategory',
                    [LABELS.CITY]: 'Boston',
                    [LABELS.STATE]: 'Massachusetts',
                    [LABELS.ZIP]: '00387',
                },
            ],
        }));
});
