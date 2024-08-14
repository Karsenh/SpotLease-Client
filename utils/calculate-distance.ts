import {Region} from 'react-native-maps';

const R = 6371;
const toRadians = (degree: number) => (degree * Math.PI) / 180;

export const calculateDistance = (currentMapPosition: Region) => {
  const {latitude, longitude, longitudeDelta} = currentMapPosition;

  const minLongitude = longitude - longitudeDelta / 2;
  const maxLongitude = longitude + longitudeDelta / 2;

  const deltaLongitude = toRadians(maxLongitude - minLongitude);

  const a =
    Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2) +
    Math.cos(toRadians(latitude)) *
      Math.cos(toRadians(latitude)) *
      Math.sin(deltaLongitude / 2) *
      Math.sin(deltaLongitude / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(Math.abs(1 - a)));

  const distanceKm = R * c;

  const distanceMiles = distanceKm * 0.621371;

  return {distanceKm, distanceMiles};
};
