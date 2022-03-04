import AsyncStorage from '@react-native-community/async-storage';

const USER_DATA = 'userData';
const FAVORITE_LIST = 'FAVORITE_LIST';

const setFavoriteList = async data => {
  try {
    await AsyncStorage.setItem(FAVORITE_LIST, JSON.stringify(data));
  } catch (e) {
    throw new Error(e);
  }
};

const getFavoriteList = () => {
  return new Promise(resolve => {
    try {
      AsyncStorage.getItem(FAVORITE_LIST)
        .then(value => {
          console.log(JSON.parse(value));
          if (value !== null) {
            const list = JSON.parse(value);
            console.log('value222', list);

            resolve(list);
          } else {
            resolve([]);
          }
        })
        .catch(() => resolve(false));
    } catch (e) {
      resolve(false);
      throw new Error(e);
    }
  });
};

const Storage = {
  setFavoriteList,
  getFavoriteList,
};

export default Storage;
