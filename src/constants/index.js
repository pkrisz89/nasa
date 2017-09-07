export const APIURL = 'https://images-api.nasa.gov/';
export const defaultUrl = (keyword, mediatype) => `${APIURL}search?q=${keyword}&media_type=${mediatype}`