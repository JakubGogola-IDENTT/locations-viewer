/* global google */
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useToast } from './useToast';
import { buildAddress } from '../functions';
import { categoriesMapper } from '../functions/mappers';
import { MARKER } from '../constants/marker';

export const useSetMarkers = map => {
    const locationList = useSelector(
        ({ locations: { locationsList: ll } }) => ll
    );
    const colors = useMemo(
        () => categoriesMapper(locationList),
        [locationList]
    );
    const toast = useToast();

    const onComplete = useCallback(
        category => (results, status) => {
            if (status !== 'OK') {
                toast.error(
                    `Geocode was not successful for the following reason: ${status}`
                );
            }

            const [
                {
                    geometry: { location },
                },
            ] = results;

            map.setCenter(location);
            const marker = new google.maps.Marker({
                map,
                position: location,
                icon: {
                    path: MARKER,
                    scale: 0.1,
                    anchor: new google.maps.Point(200, 400),
                    strokeColor: colors[category],
                    strokeWeight: 4,
                },
            });
            marker.setMap(map);
        },
        [colors, map, toast]
    );

    const setMarkers = useCallback(() => {
        const geocoder = new google.maps.Geocoder();

        locationList.forEach(({ state, city, zip, address, category }) => {
            geocoder.geocode(
                {
                    address: buildAddress(state, city, zip, address),
                },
                onComplete(category)
            );
        });
    }, [locationList, onComplete]);

    return setMarkers;
};
