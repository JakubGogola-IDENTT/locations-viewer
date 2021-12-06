import { useState, useCallback } from 'react';
import { InputField } from '@livechat/design-system';

export const FileInput = () => {
    const [, setFile] = useState('');

    const handleUpload = useCallback(e => {
        setFile(e.target?.files[0]);
    }, []);

    return (
        <InputField
            id="fileInput"
            accept=".csv"
            type="file"
            placeholder="Choose CSV file to upload"
            onChange={handleUpload}
        />
    );
};

FileInput.propTypes = {};
