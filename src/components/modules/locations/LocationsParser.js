import { useMemo } from 'react';
import { LabelSelect } from '../../core/select/LabelSelect';
import { COLUMN_IDS } from '../../../constants/columnIds';
import { useStyles, useLabelSelectsGroup } from '../../../hooks';

const styles = {
    box: {
        display: 'flex',
        flexFlow: 'column nowrap',
    },
};

export const LocationsParser = () => {
    const classes = useStyles(styles, LocationsParser);
    const { assignments, handleSelect } = useLabelSelectsGroup();

    const components = useMemo(
        () =>
            COLUMN_IDS.getAll().map((id, idx) => (
                <div className={classes.box}>
                    Column {idx + 1}
                    <LabelSelect
                        key={`select-${idx.toString()}`}
                        id={id}
                        onSelect={handleSelect}
                        assignments={assignments}
                        selected={assignments[id]}
                    />
                </div>
            )),
        [assignments, classes.box, handleSelect]
    );

    return <div className={classes.box}>{components}</div>;
};
