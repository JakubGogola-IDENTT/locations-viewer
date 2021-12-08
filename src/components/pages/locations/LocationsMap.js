// import { Wrapper } from '@googlemaps/react-wrapper';
import { useStyles, useLocationsMap } from '../../../hooks';
// import { config } from '../../../config';

const styles = {
    box: {
        wdith: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '800px',
        height: '600px',
    },
};

export const LocationsMap = () => {
    const classes = useStyles(styles, LocationsMap);
    const { ref } = useLocationsMap();

    return (
        <div className={classes.box}>
            <div className={classes.map} id="map" ref={ref} />
        </div>
    );
};
