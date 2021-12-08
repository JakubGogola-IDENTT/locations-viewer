/* global google */
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useToast } from './useToast';
import { buildAddress } from '../functions';

export const useMarkers = map => {
    const locationList = useSelector(
        ({ locations: { locationsList: ll } }) => ll
    );
    const toast = useToast();

    const onComplete = useCallback(
        (results, status) => {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
                const marker = new google.maps.Marker({
                    map,
                    position: results[0].geometry.location,
                });
                marker.setMap(map);
            } else {
                toast.error(
                    `Geocode was not successful for the following reason: ${status}`
                );
            }
        },
        [map, toast]
    );

    const setMarkers = useCallback(() => {
        const geocoder = new google.maps.Geocoder();

        locationList.forEach(({ state, city, zip, address }) => {
            geocoder.geocode(
                {
                    address: buildAddress(state, city, zip, address),
                },
                onComplete
            );
        });
    }, [locationList, onComplete]);

    return setMarkers;
};
