import { LABELS } from '../../constants/labels';
import { COLUMN_IDS } from '../../constants/columnIds';
import { locationsMapper } from './locationsMapper';

describe('functions > mappers > locationsMapper', () => {
    it('should create locations mapping based on CSV data and labels assignment', () =>
        expect(
            locationsMapper(
                {
                    [COLUMN_IDS.COL_1]: LABELS.ADDRESS,
                    [COLUMN_IDS.COL_2]: LABELS.CATEGORY,
                    [COLUMN_IDS.COL_3]: LABELS.CITY,
                    [COLUMN_IDS.COL_4]: LABELS.STATE,
                    [COLUMN_IDS.COL_5]: LABELS.ZIP,
                },
                [
                    [
                        'One Intenational Place',
                        'MyCategory',
                        'Boston',
                        'Massachusetts',
                        '00387',
                    ],
                ]
            )
        ).toEqual([
            {
                [LABELS.ADDRESS]: 'One Intenational Place',
                [LABELS.CATEGORY]: 'MyCategory',
                [LABELS.CITY]: 'Boston',
                [LABELS.STATE]: 'Massachusetts',
                [LABELS.ZIP]: '00387',
            },
        ]));
});
