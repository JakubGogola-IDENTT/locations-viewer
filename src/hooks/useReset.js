import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { stateCleared } from '../actions/common';

export const useReset = () => {
    const dispatch = useDispatch();
    return useCallback(() => dispatch(stateCleared()), [dispatch]);
};
