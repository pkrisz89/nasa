import axios from 'axios';

export default url => {
  return axios.get(url)
    .then((res) => res.data.collection)
    .catch((error) => { console.log(error); });
};