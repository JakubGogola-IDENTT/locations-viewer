import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { LabelSelectsGroup } from '../../modules/locations/LabelSelectsGroup';

export const LocationsProvider = ({ children }) => {
    const areLocationsParsed = useSelector(
        ({ locations: { locationsList } }) => !!locationsList.length
    );

    if (!areLocationsParsed) {
        return <LabelSelectsGroup />;
    }

    return children;
};

LocationsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
