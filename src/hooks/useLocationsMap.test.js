/* eslint-disable max-classes-per-file */
import { renderHook } from '@testing-library/react-hooks';
import { useLocationsMap } from './useLocationsMap';

const mockUseRef = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useRef: obj => mockUseRef(obj),
}));

const mockUseSetMarkers = jest.fn();
jest.mock('./useSetMarkers', () => ({
    __esModule: true,
    useSetMarkers: map => mockUseSetMarkers(map),
}));

describe('hooks > useLocationsMap', () => {
    const setMarkers = jest.fn();
    mockUseSetMarkers.mockReturnValue(setMarkers);
    mockUseRef.mockReturnValue({ current: null });

    const mapContructor = jest.fn();
    const latLngConstructor = jest.fn();
    const google = {
        maps: {
            Map: class {
                constructor() {
                    mapContructor();
                }
            },
            LatLng: class {
                constructor() {
                    latLngConstructor();
                }
            },
        },
    };

    global.google = google;

    beforeEach(jest.clearAllMocks);

    afterAll(() => {
        delete global.google;
    });

    it('should return default state', () => {
        const { result } = renderHook(() => useLocationsMap());

        expect(mockUseRef).toHaveBeenCalledWith(null);
        expect(mockUseSetMarkers).toHaveBeenCalledWith(null);

        const {
            current: { ref },
        } = result;
        expect(ref).toEqual({ current: null });
    });

    it('should create new instance of map', () => {
        mockUseRef
            .mockReturnValueOnce({ current: {} })
            .mockReturnValueOnce({ current: {} });

        const { rerender } = renderHook(() => useLocationsMap());

        rerender();

        expect(mapContructor).toHaveBeenCalled();
        expect(latLngConstructor).toHaveBeenCalled();
        expect(setMarkers).toHaveBeenCalled();
    });
});
