import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from '../../../hooks';

const styles = {
    selected: {
        color: '#000',
        opacity: 0.5,
    },
    unselected: {
        color: '#000',
    },
};

export const Item = ({ id, isSelected, name }) => {
    const classes = useStyles(styles, Item);

    const className = useMemo(
        () => (isSelected ? classes.selected : classes.unselected),
        [classes.selected, classes.unselected, isSelected]
    );

    return (
        <div id={id} className={className}>
            {name}
        </div>
    );
};

Item.defaultProps = {
    isSelected: false,
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    name: PropTypes.string.isRequired,
};
