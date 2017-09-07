import axios from 'axios';

export default (event, url) => {
  event.preventDefault();
  return axios.get(url)
    .then((res) => res.data.collection)
    .catch((error) => { console.log(error); });
};