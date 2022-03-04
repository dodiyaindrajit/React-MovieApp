import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {AppContainer, AppHeader, AppScrollView} from '../../Components';
import {Const} from '../../Helper';
import styles from './DetailScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getFavoriteList,
  setFavoriteList,
  getHideList,
  setHideList,
} from '../../Store/favoriteSlice';
import HTMLView from 'react-native-htmlview';

const HomeScreen = ({navigation, route}) => {
  const {id, name, image, summary, rating} = route.params.item;
  const dispatch = useDispatch();
  const favoriteList = useSelector(getFavoriteList);
  const hideList = useSelector(getHideList);

  const [isFavorite, setFavorite] = useState(false);
  const [isHide, setHide] = useState(false);

  // Call to get favorite list
  useEffect(() => {
    getFavoriteListStore();
  }, [favoriteList]);

  // Call to get hide list
  useEffect(() => {
    getHideListStore();
  }, [hideList]);

  // Set hide icon based on storage
  const getHideListStore = () => {
    console.log('getHideList------>', hideList);
    if (hideList.includes(route.params.item)) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  // Set favorite icon based on storage
  const getFavoriteListStore = () => {
    console.log('getFavoriteList------>', favoriteList);
    if (favoriteList.includes(route.params.item)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  // Code to add item in favorite list
  const addToFavorite = () => {
    if (favoriteList.filter(e => e.name === name).length > 0) {
      var filteredArray = favoriteList.filter(function (e) {
        return e.name !== name;
      });
      dispatch(setFavoriteList(filteredArray));
    } else {
      const tmpList = [];
      tmpList.push(route.params.item);
      const final = favoriteList.concat(tmpList);
      dispatch(setFavoriteList(final));
    }
  };

  // Code to add item in hide list
  const addToHide = () => {
    if (hideList.filter(e => e.name === name).length > 0) {
      var filteredArray = hideList.filter(function (e) {
        return e.name !== name;
      });

      dispatch(setHideList(filteredArray));
    } else {
      const tmpList = [];
      tmpList.push(route.params.item);
      const final = hideList.concat(tmpList);
      dispatch(setHideList(final));
    }
  };

  return (
    <AppContainer>
      <AppHeader
        text={name}
        onBackPress={() => navigation.goBack()}
        onFavoritePress={addToFavorite}
        onHidePress={addToHide}
        favIcon={isFavorite ? 'red' : 'black'}
        hideIcon={isHide ? 'red' : 'black'}
      />
      <AppScrollView>
        <View style={{flex: 1}}>
          <Image
            source={{uri: image.original}}
            style={{height: 300, width: '100%', resizeMode: 'contain'}}
          />

          <Text style={styles.movieRating} numberOfLines={1}>
            {Const.lang.t('detail.rating')} {rating.average} / 10
          </Text>

          <Text style={styles.movieSummary}></Text>
          <HTMLView value={summary} stylesheet={styles.movieSummary} />
          {/* <Text style={styles.movieSummary}>{summary}</Text> */}
        </View>
      </AppScrollView>
    </AppContainer>
  );
};
export default HomeScreen;
