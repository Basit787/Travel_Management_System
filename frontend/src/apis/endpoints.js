export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const ApiEndpoints = {
  //auth
  login: () => `users/login`,
  register: () => `/users/register`,

  //contacts
  getContacts: () => `/contacts/getContacts`,

  //locations
  getLocations: () => `/location/getLocations`,

  //places
  getPlaces: () => `/place/getallplaces`,
  getPlaceById: (id) => `place/getPlaceById/${id}`,

  //booking
  bookPlace: () => `/booking/bookplace`,
  getBooking: (id) => `/booking/getBookingsByUserId/${id}`,
};
