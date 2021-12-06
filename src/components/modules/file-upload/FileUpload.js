import { FileInput } from '../../core/file-input/FileInput';
import { useUploadFile } from '../../../hooks';

export const FileUpload = () => {
    const [handleUpload] = useUploadFile();

    return <FileInput onChange={handleUpload} />;
};
