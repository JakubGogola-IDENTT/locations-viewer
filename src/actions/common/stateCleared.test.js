import { STATE_CLEARED } from '../../constants/actions';
import { stateCleared } from './stateCleared';

describe('actions > common > stateCleared', () => {
    it('should create an action', () =>
        expect(stateCleared()).toEqual({ type: STATE_CLEARED }));
});
