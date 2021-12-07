import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LocationsParser } from '../../modules/locations/LocationsParser';

export const LocationsProvider = ({ children }) => {
    const areLocationsParsed = useSelector(
        ({ locations: { locationsList } }) => !!locationsList.length
    );

    if (!areLocationsParsed) {
        return <LocationsParser />;
    }

    return children;
};

LocationsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
