import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CsvFileUploader } from '../../modules/file/CsvFileUploader';

export const CsvDataProvider = ({ children }) => {
    const isCsvDataLoaded = useSelector(({ csv }) => !!csv.data);

    if (!isCsvDataLoaded) {
        return <CsvFileUploader />;
    }

    return children;
};

CsvDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
