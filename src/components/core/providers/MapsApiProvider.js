import PropTypes from 'prop-types';
import { Loader } from '@livechat/design-system';
import { useLoadMapsApi, useStyles } from '../../../hooks';

const styles = {
    box: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export const MapsApiProvider = ({ children }) => {
    const classes = useStyles(styles, MapsApiProvider);
    const { isLoaded } = useLoadMapsApi();

    if (!isLoaded) {
        return (
            <div className={classes.box}>
                <Loader data-testid="MapsApiProvider-loader" />
            </div>
        );
    }

    return children;
};

MapsApiProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
