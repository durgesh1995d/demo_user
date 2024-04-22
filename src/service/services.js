import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

const getNetwork = async () => {
  let isConnected = false;
  await NetInfo.fetch().then(state => {
    console.log('network=2=>', state);
    isConnected = state.isConnected;
  });
  return isConnected;
};

const get = url => {
  let connect = getNetwork();
  if (connect) {
    return axios
      .get(url)
      .then(response => response.data)
      .catch(error => error);
  } else {
    console.log('Network=Error===>');
  }
};

const post = (url, body) => {
  let connect = getNetwork();
  if (connect) {
    return axios
      .post(url, body, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      })
      .then(response => response.data)
      .catch(error => error);
  } else {
    console.log('Network=Error===>');
  }
};

export {get, post};
