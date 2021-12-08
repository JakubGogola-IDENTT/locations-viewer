import { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useToast } from './useToast';
import { config } from '../config';

export const useLoadMapsApi = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const toast = useToast();

    useEffect(() => {
        if (isLoaded) {
            return;
        }

        const loader = new Loader({
            apiKey: config.API_KEY,
            version: 'weekly',
        });

        loader
            .load()
            .then(() => setIsLoaded(true))
            .catch(error => {
                console.log('xd');
                const cause = error?.message ? ` Cause: ${error.message}` : '';
                toast.error(
                    `Loading Maps API failed. Try to refresh website.${cause}`
                );
            });
    });

    return { isLoaded };
};
