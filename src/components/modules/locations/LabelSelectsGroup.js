import { useMemo } from 'react';
import { Button } from '@livechat/design-system';
import { LabelSelect } from '../../core/select/LabelSelect';
import { COLUMN_IDS } from '../../../constants/columnIds';
import { useStyles, useLabelSelectsGroup } from '../../../hooks';

const styles = {
    box: {
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        height: '100%',
        padding: '20px',
    },
    header: {
        marginBottom: '10px',
    },
    selectWrapper: {
        display: 'flex',
        flexFlow: 'column nowrap',
    },
    select: {
        width: '300px',
    },
    button: {
        width: '150px',
    },
};

export const LabelSelectsGroup = () => {
    const classes = useStyles(styles, LabelSelectsGroup);
    const { assignments, canSubmit, handleSelect, handleSubmit } =
        useLabelSelectsGroup();

    const components = useMemo(
        () =>
            COLUMN_IDS.getAll().map((id, idx) => (
                <div
                    className={classes.selectWrapper}
                    key={`select-${idx.toString()}`}
                >
                    Column {idx + 1}
                    <LabelSelect
                        data-testid="LabelSelectsGroup-select"
                        className={classes.select}
                        id={id}
                        onSelect={handleSelect}
                        assignments={assignments}
                        selected={assignments[id]}
                    />
                </div>
            )),
        [assignments, classes.select, classes.selectWrapper, handleSelect]
    );

    return (
        <div className={classes.box}>
            <h1 data-testid="LabelSelectsGroup-header">
                Assign labels to CSV columns
            </h1>
            <p data-testid="LabelSelectsGroup-desc">
                Submitting changes will be possible after assigning label for
                each column.
            </p>
            {components}
            <Button
                data-testid="LabelSelectsGroup-button"
                className={classes.button}
                kind="primary"
                disabled={!canSubmit}
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    );
};
