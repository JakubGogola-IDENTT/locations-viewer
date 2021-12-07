import { useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COLUMN_IDS } from '../constants/columnIds';
import { locationsMapper } from '../functions/mappers';
import { locationsParsed } from '../actions/locations';
import { LABELS } from '../constants/labels';

export const useLabelSelectsGroup = () => {
    const dispatch = useDispatch();
    const csvData = useSelector(({ csv: { data } }) => data);
    const [assignments, setAssignments] = useState({
        [COLUMN_IDS.COL_1]: null,
        [COLUMN_IDS.COL_2]: null,
        [COLUMN_IDS.COL_3]: null,
        [COLUMN_IDS.COL_4]: null,
        [COLUMN_IDS.COL_5]: null,
    });

    const canSubmit = useMemo(() => {
        const labelValues = LABELS.getAll();
        const assignedLabels = Object.values(assignments).filter(v =>
            labelValues.includes(v)
        );

        return assignedLabels.length === labelValues.length;
    }, [assignments]);

    const handleSubmit = useCallback(() => {
        if (!canSubmit) {
            return;
        }

        dispatch(locationsParsed(locationsMapper(assignments, csvData)));
    }, [assignments, canSubmit, csvData, dispatch]);

    const handleSelect = useCallback(
        (columnId, value) => {
            setAssignments({
                ...assignments,
                [columnId]: value,
            });
        },
        [assignments]
    );

    return { assignments, canSubmit, handleSelect, handleSubmit };
};
