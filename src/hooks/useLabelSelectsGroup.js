import { useCallback, useState } from 'react';
import { COLUMN_IDS } from '../constants/columnIds';

export const useLabelSelectsGroup = () => {
    const [assignments, setAssignments] = useState({
        [COLUMN_IDS.COL_1]: null,
        [COLUMN_IDS.COL_2]: null,
        [COLUMN_IDS.COL_3]: null,
        [COLUMN_IDS.COL_4]: null,
        [COLUMN_IDS.COL_5]: null,
    });

    const handleSelect = useCallback(
        (columnId, value) => {
            setAssignments({
                ...assignments,
                [columnId]: value,
            });
        },
        [assignments]
    );

    return { assignments, handleSelect };
};
