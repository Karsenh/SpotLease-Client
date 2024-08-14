import {useEffect, useState} from 'react';

import {
  getForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import {LatLng} from 'react-native-maps';

export const DEFAULT_COORDINATES = {
  latitude: 40.20274213952319,
  longitude: 44.53403631123796,
};

const useGetCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);

  useEffect(() => {
    getForegroundPermissionsAsync().then(response => {
      if (!response.granted) {
        setCurrentLocation(DEFAULT_COORDINATES);

        return;
      }

      getCurrentPositionAsync({timeInterval: 60000}).then(location => {
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      });
    });
  }, []);

  return {currentLocation};
};

export {useGetCurrentLocation};
