import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { parse } from 'papaparse';
import { validateCsvFile } from '../functions';
import { csvDataAcquired } from '../actions/csv';
// import { useToast } from './useToast';

export const useUploadCsvFile = () => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const [state, setState] = useState({
        isParsing: false,
        data: null,
        errors: [],
    });

    const handleUpload = useCallback(e => {
        setFile(e.target?.files[0]);
    }, []);

    const handleComplete = useCallback(
        ({ data, errors }) => {
            setState({
                data,
                errors,
                isParsing: false,
            });
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

        setState({
            data: null,
            errors: [],
            isParsing: true,
        });
        handleParse();
    }, [file, handleComplete, handleParse]);

    return {
        isParsing: state.isParsing,
        handleUpload,
    };
};
