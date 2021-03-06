import axios from 'axios';

export default url => {
  return axios
    .get(url)
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
};
