import GoogleGeocoder from 'react-geocode';
GoogleGeocoder.setApiKey('AIzaSyBQUeDjbwpS8YCApba7OFuvqwdKRFCsvmo');
GoogleGeocoder.setLanguage('en');
GoogleGeocoder.enableDebug();

export function geocodeAddressToCoordiantes(location) {
  console.log('inside conversion');

  return GoogleGeocoder.fromAddress(location)
    .then(response => response.results[0].geometry.location)
    .catch(error => console.log(error));
}
export default { geocodeAddressToCoordiantes };
