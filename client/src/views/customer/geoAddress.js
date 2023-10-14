import axios from 'axios';

const getGeolocationAddress = async (latitude, longitude) => {
  try {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);

    if (response.data && response.data.address) {
      const { road, city, state, country, postcode } = response.data.address;
      return `${road || ''}, ${city || ''}, ${state || ''}, ${country || ''}`;
    } else {
      return 'Location information not available.';
    }
  } catch (error) {
    console.error('Error fetching address:', error);
    return 'Error fetching address.';
  }
};

export default getGeolocationAddress;

