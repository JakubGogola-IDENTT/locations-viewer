import { Button } from '@livechat/design-system';
import { useStyles, useLocationsMap, useReset } from '../../../hooks';

const styles = {
    box: {
        wdith: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        padding: '20px',
    },
    map: {
        width: '800px',
        height: '600px',
    },
    header: {
        marginBottom: '10px',
    },
    button: {
        width: '150px',
    },
};

export const LocationsMap = () => {
    const classes = useStyles(styles, LocationsMap);
    const { ref } = useLocationsMap();
    const handleReset = useReset();

    return (
        <div className={classes.box}>
            <h1 className={classes.header}>Your locations</h1>
            <p>
                Here&apos;s map with locations passed from CSV file. Each
                category is marked by different color.
            </p>
            <div className={classes.map} id="map" ref={ref} />
            <p>
                If you wish to set new locations on map then click button below!
            </p>
            <Button
                className={classes.button}
                kind="destructive"
                onClick={handleReset}
            >
                Reset
            </Button>
        </div>
    );
};
