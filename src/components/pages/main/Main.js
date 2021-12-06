import { useSelector } from 'react-redux';

export const Main = () => {
    const [csvData, locationsList] = useSelector(
        ({ csv: { csvData: cd }, locations: { locationsList: l } }) => [cd, l]
    );

    if (locationsList.length > 0) {
        return 'Map';
    }

    if (csvData) {
        return 'Columns assignment';
    }

    return 'File upload';
};
