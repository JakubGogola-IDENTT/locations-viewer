import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { parse } from 'papaparse';
import { validateCsvFile } from '../functions';
import { csvDataAcquired } from '../actions/csv';
// import { useToast } from './useToast';

export const useUploadCsvFile = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const [isParsing, setIsParsing] = useState(false);

    const handleUpload = useCallback(e => {
        setFile(e.target?.files[0]);
    }, []);

    const handleComplete = useCallback(
        ({ data }) => {
            setIsParsing(false);
            validateCsvFile(data);
            dispatch(csvDataAcquired(data));
        },
        [dispatch]
    );

    const handleParse = useCallback(() => {
        parse(file, {
            complete: handleComplete,
        });
    }, [file, handleComplete]);

    useEffect(() => {
        if (!file) {
            return;
        }

        setIsParsing(true);
        handleParse();
    }, [file, handleComplete, handleParse]);

    return {
        isParsing,
        handleUpload,
    };
};
