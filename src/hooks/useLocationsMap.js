/* global google */
import { useEffect, useRef, useState } from 'react';

export const useLocationsMap = () => {
    const ref = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new google.maps.Map(ref.current, {}));
        }
    }, [map, ref]);

    return { ref };
};
