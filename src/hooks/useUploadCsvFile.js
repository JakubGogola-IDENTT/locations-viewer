import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { parse } from 'papaparse';
import { validateCsvFile } from '../functions';
import { csvDataAcquired } from '../actions/csv';
import { useToast } from './useToast';

export const useUploadCsvFile = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const [isParsing, setIsParsing] = useState(false);
    const toast = useToast();

    const handleUpload = useCallback(e => {
        setFile(e.target?.files[0]);
    }, []);

    const handleComplete = useCallback(
        ({ data }) => {
            try {
                validateCsvFile(data);
                dispatch(csvDataAcquired(data));
            } catch (error) {
                toast.error(error.message);
            } finally {
                setIsParsing(false);
                setFile(null);
            }
        },
        [dispatch, toast]
    );

    const handleParse = useCallback(() => {
        parse(file, {
            complete: handleComplete,
            skipEmptyLines: true,
        });
    }, [file, handleComplete]);

    useEffect(() => {
        if (!file || isParsing) {
            return;
        }

        setIsParsing(true);
        handleParse();
    }, [file, handleComplete, handleParse, isParsing]);

    return {
        isParsing,
        handleUpload,
    };
};
