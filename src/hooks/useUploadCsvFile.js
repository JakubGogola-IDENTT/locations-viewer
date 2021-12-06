import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { parse } from 'papaparse';
import { validateCsvFile } from '../functions';
import { csvDataAcquired } from '../actions/csv';

export const useUploadCsvFile = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const [isParsing, setIsParsing] = useState(false);
    const [parsedData, setParsedData] = useState({
        data: null,
        errors: [],
    });

    const handleUpload = useCallback(e => {
        setFile(e.target?.files[0]);
    }, []);

    const onComplete = useCallback(
        ({ data, errors }) => {
            setParsedData({
                data,
                errors,
            });
            setIsParsing(false);
            validateCsvFile(data);
            dispatch(csvDataAcquired(data));
        },
        [dispatch]
    );

    useEffect(() => {
        if (!file) {
            return;
        }

        setIsParsing(true);
        parse(file, {
            complete: onComplete,
        });
    }, [file, onComplete]);

    return {
        isParsing,
        parsedData,
        handleUpload,
    };
};
