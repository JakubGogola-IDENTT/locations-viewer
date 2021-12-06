import { useCallback, useEffect, useState } from 'react';
import { parse } from 'papaparse';

export const useUploadFile = () => {
    const [file, setFile] = useState(null);
    const [parsedData, setParsedData] = useState({
        data: null,
        errors: [],
    });

    const handleUpload = useCallback(e => {
        setFile(e.target?.files[0]);
    }, []);

    const onComplete = useCallback(({ data, errors }) => {
        setParsedData({
            data,
            errors,
        });
    }, []);

    useEffect(() => {
        if (!file) {
            return;
        }

        parse(file, {
            complete: onComplete,
        });
    }, [file, onComplete]);

    return [handleUpload, parsedData.data, parsedData.errors];
};
