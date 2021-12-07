import { FileInput } from '../../core/file/FileInput';
import { useUploadCsvFile, useStyles } from '../../../hooks';

const styles = {
    box: {
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        height: '100%',
        padding: '20px',
    },
    header: {
        marginBottom: '10px',
    },
    input: {
        width: '300px',
    },
};

export const CsvFileUploader = () => {
    const classes = useStyles(styles, CsvFileUploader);

    const { isParsing, handleUpload } = useUploadCsvFile();

    return (
        <div className={classes.box}>
            <h1 data-testid="CsvFileUploader-header" className={classes.header}>
                Upload CSV file
            </h1>
            <p data-testid="CsvFileUploader-desc">
                Your file should contain exactly <strong>5 columns</strong> and
                have no more than <strong>20 rows</strong>.
            </p>
            <FileInput
                data-testid="CsvFileUploader-fileInput"
                className={classes.input}
                disabled={isParsing}
                onChange={handleUpload}
            />
        </div>
    );
};
