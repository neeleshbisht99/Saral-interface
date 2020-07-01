import axios from 'axios';

const serverHost = 'http://localhost:4000/api';
const mapboxDirectionsHost = 'https://api.mapbox.com/directions/v5/mapbox';
const MAPBOX_TOKEN =
  'pk.eyJ1IjoibmVlbGVzaGJpc2h0IiwiYSI6ImNrODJtdTB6djAxaHkzbW9kMjljMjU0N24ifQ.QrotGUZ6WIwCEYXXH9MlXw';

export const call = async (method, path, data) => {
  try {
    const response = await axios[method](`${serverHost}/${path}`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const getDirections = async (method, pathCoordinates, profile, data) => {
  const path =
    pathCoordinates.initialPoint[0] +
    ',' +
    pathCoordinates.initialPoint[1] +
    ';' +
    pathCoordinates.finalPoint[0] +
    ',' +
    pathCoordinates.finalPoint[1] +
    '?steps=false&geometries=geojson&access_token=' +
    MAPBOX_TOKEN;
  try {
    const response = await axios[method](
      `${mapboxDirectionsHost}/${profile}/${path}`,
      data,
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export default { call };
