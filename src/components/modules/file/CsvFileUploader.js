import { FileInput } from '../../core/file/FileInput';
import { useUploadCsvFile, useStyles } from '../../../hooks';

const styles = {
    box: {
        display: 'flex',
        flexFlow: 'column nowrap',
    },
};

export const CsvFileUploader = () => {
    const classes = useStyles(styles, CsvFileUploader);

    const { isParsing, handleUpload } = useUploadCsvFile();

    return (
        <div className={classes.box}>
            <h1>Localizer</h1>
            <FileInput disabled={isParsing} onChange={handleUpload} />
        </div>
    );
};
