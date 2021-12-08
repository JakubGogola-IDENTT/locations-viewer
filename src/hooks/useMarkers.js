/* global google */
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useToast } from './useToast';
import { buildAddress } from '../functions';
import { categoriesMapper } from '../functions/mappers';

export const useMarkers = map => {
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
                    path: 'M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z',
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
