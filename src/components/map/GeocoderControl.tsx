import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import React from 'react';
import { ControlPosition, useControl } from 'react-map-gl';

type GeocoderControlProps = {
  position?: ControlPosition;
};

const GeocoderControl: React.FC<GeocoderControlProps> = ({ position }) => {
  const geocoder = useControl<MapboxGeocoder>(
    () => {
      const ctrl = new MapboxGeocoder({
        accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '',
      });

      return ctrl;
    },
    {
      position,
    }
  );
  geocoder.setLanguage('sl');

  return null;
};

GeocoderControl.defaultProps = {
  position: 'top-right',
};

export default GeocoderControl;
