import { renderHook, act } from '@testing-library/react-hooks';
import { stateCleared } from '../actions/common';
import { useReset } from './useReset';

const mockUseDispatch = jest.fn();
jest.mock('react-redux', () => ({
    __esModule: true,
    useDispatch: () => mockUseDispatch(),
}));

describe('hooks > useReset', () => {
    const dispatch = jest.fn();
    mockUseDispatch.mockReturnValue(dispatch);

    beforeEach(jest.clearAllMocks);

    it('should dispatch state cleared action', () => {
        const { result } = renderHook(() => useReset());
        expect(mockUseDispatch).toHaveBeenCalled();

        const callback = result.current;

        act(() => callback());
        expect(dispatch).toHaveBeenCalledWith(stateCleared());
    });
});
