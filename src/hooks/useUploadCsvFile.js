import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { parse } from 'papaparse';
import { validateCsvFile } from '../functions';
import { parsingErrorsMapper } from '../functions/mappers';
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
            errors.forEach(error => toast.error(error));
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
            const errorMessages = [
                ...parsingErrorsMapper(errors),
                ...(errors.length === 0 ? validateCsvFile(data) : []),
            ];

            if (errorMessages.length > 0) {
                handleErrors(errorMessages);
            } else {
                dispatch(csvDataAcquired(data));
            }

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
