/* global google */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '@livechat/design-system';
import { Loader as ApiLoader } from '@googlemaps/js-api-loader';

export const MapsApiProvider = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loader = new ApiLoader({
            apiKey: 'AIzaSyBHWhONiRbHBtH7rInBf6Fs3ydsJ6B1lAU',
            version: 'weekly',
        });

        loader
            .load()
            .then(() => {
                setIsLoaded(true);

                const geocoder = new google.maps.Geocoder();
                console.log(geocoder);

                geocoder.geocode(
                    { address: 'Wroclaw Rynek' },
                    (results, status) => {
                        if (status === 'OK') {
                            const loc = results[0].geometry.location;

                            console.log(loc.lat());
                            console.log(loc.lng());
                        } else {
                            console.error(status);
                        }
                    }
                );

                return null;
            })
            .catch(console.error);
    }, []);

    if (!isLoaded) {
        return <Loader />;
    }

    return children;
};

MapsApiProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
