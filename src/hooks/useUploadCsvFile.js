import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { parse } from 'papaparse';
import { validateCsvFile } from '../functions';
import { csvDataAcquired } from '../actions/csv';
import { useToast } from './useToast';

export const useUploadCsvFile = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        file: null,
        isParsing: false,
    });
    const toast = useToast();

    const handleUpload = useCallback(
        e => {
            setState({
                ...state,
                file: e.target?.files[0],
            });
        },
        [state]
    );

    const handleErrors = useCallback(
        errors => {
            errors.forEach(error => toast.error(error?.message || error));
        },
        [toast]
    );

    const resetState = useCallback(() => {
        setState({
            file: null,
            isParsing: false,
        });
    }, []);

    const handleComplete = useCallback(
        ({ data, errors }) => {
            if (errors.length > 0) {
                handleErrors(errors);
                resetState();
                return;
            }

            const validationErrors = validateCsvFile(data);

            if (validationErrors.length > 0) {
                handleErrors(validationErrors);
                resetState();
                return;
            }

            dispatch(csvDataAcquired(data));
            resetState();
        },
        [dispatch, handleErrors, resetState]
    );

    const handleParse = useCallback(() => {
        parse(state.file, {
            complete: handleComplete,
            skipEmptyLines: true,
        });
    }, [handleComplete, state.file]);

    useEffect(() => {
        if (!state.file || state.isParsing) {
            return;
        }

        setState({
            ...state,
            isParsing: true,
        });
        handleParse();
    }, [handleParse, state]);

    return {
        isParsing: state.isParsing,
        handleUpload,
    };
};
