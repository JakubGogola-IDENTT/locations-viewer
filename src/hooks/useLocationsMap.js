/* global google */
import { useEffect, useRef, useState } from 'react';
import { useMarkers } from './useMarkers';

export const useLocationsMap = () => {
    const ref = useRef(null);
    const [map, setMap] = useState(null);
    const setMarkers = useMarkers(map);

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new google.maps.Map(ref.current, {
                    zoom: 8,
                    center: new google.maps.LatLng(-34.397, 150.644),
                })
            );
        }

        if (map) {
            setMarkers();
        }
    }, [map, ref, setMarkers]);

    return { ref };
};
