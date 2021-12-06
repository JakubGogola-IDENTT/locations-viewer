import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const LocationsProvider = ({ children }) => {
    const areLocationsParsed = useSelector(
        ({ locations: { locationsList } }) => !!locationsList.length
    );

    if (!areLocationsParsed) {
        return 'Locations parser';
    }

    return children;
};

LocationsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
