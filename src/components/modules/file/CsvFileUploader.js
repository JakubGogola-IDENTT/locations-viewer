import { FileInput } from '../../core/file/FileInput';
import { useUploadCsvFile } from '../../../hooks';

export const CsvFileUploader = () => {
    const { isParsing, handleUpload } = useUploadCsvFile();

    return <FileInput disabled={isParsing} onChange={handleUpload} />;
};
