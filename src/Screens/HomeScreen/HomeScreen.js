import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AppContainer, AppHeader} from '../../Components';
import {Const, Color, Screen, Loader, Responsive} from '../../Helper';
import styles from './HomeScreenStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import APICall from '../../Network/APICall';
import EndPoints from '../../Network/EndPoints';
import {useSelector} from 'react-redux';
import {getFavoriteList, getHideList} from '../../Store/favoriteSlice';
import HTMLView from 'react-native-htmlview';
import RBSheet from 'react-native-raw-bottom-sheet';

const listType = ['All', 'Favorite', 'Blocked'];

const HomeScreen = ({navigation}) => {
  const bottomSheet = useRef();

  const favoriteList = useSelector(getFavoriteList);
  const hideList = useSelector(getHideList);

  const [selectedType, setSelectedType] = useState('All');
  const [movieList, setMovieList] = useState([]);
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [favMovieList, setFavMovieList] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Initial call to get movie
  useEffect(() => {
    getMovieList();
  }, []);

  // Filter data on hide list changes
  useEffect(() => {
    if (filteredMovieList) {
      let filterList = movieList.filter(function (item) {
        if (hideList.filter(e => e.name === item.name).length > 0) {
          return;
        } else {
          return item;
        }
      });
      setFilteredMovieList(filterList);
    }

    if (favoriteList) {
      let filterList = favoriteList.filter(function (item) {
        if (hideList.filter(e => e.name === item.name).length > 0) {
          return;
        } else {
          return item;
        }
      });
      setFavMovieList(filterList);
    }
  }, [hideList]);

  // Get movie and show list from server and store in state
  const getMovieList = () => {
    if (!global.isInternet) {
      return;
    }
    Loader.isLoading(true);
    APICall('get', '', EndPoints.getMovieList)
      .then(response => {
        Loader.isLoading(false);
        setMovieList(response.data);
        setFilteredMovieList(response.data);
      })
      .catch(error => {
        Loader.isLoading(false);
      });
  };

  // Perform search on text input value change
  const onSearch = value => {
    setSearchText(value);

    let filterList = movieList.filter(function (item) {
      if (hideList.filter(e => e.name === item.name).length > 0) {
        return;
      }

      if (item.name.includes(value)) {
        return item;
      }
    });

    setFilteredMovieList(filterList);
  };

  // Created component for movie item
  const renderMovieItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {marginEnd: index % 2 === 0 ? Responsive.widthPx('5') : 0},
        ]}
        onPress={() => {
          navigation.navigate(Screen.DetailScreen, {item});
        }}>
        <Image source={{uri: item.image.medium}} style={styles.image} />
        <Text style={styles.movieName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.movieRating} numberOfLines={1}>
          {Const.lang.t('detail.rating')} {item.rating.average} / 10
        </Text>
        {/* <Text style={styles.movieSummary} numberOfLines={2}>
          {item.summary}
        </Text> */}
        <View style={styles.summaryContainer}>
          <HTMLView
            value={item.summary}
            stylesheet={styles.movieSummary}
            numberOfLines={2}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <AppContainer>
      <AppHeader
        text={Const.lang.t('welcome.moviePlayer')}
        onMorePress={() => {
          bottomSheet?.current?.open();
        }}
      />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={Const.lang.t('welcome.searchMovie')}
          onChangeText={onSearch}
          value={searchText}
        />
        <Icon size={17} color={Color.black} name="search-outline" />
      </View>
      <FlatList
        data={
          searchText !== ''
            ? filteredMovieList
            : selectedType === listType[0]
            ? filteredMovieList
            : selectedType === listType[1]
            ? favMovieList
            : selectedType === listType[2]
            ? hideList
            : movieList
        }
        numColumns={2}
        renderItem={renderMovieItem}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        style={{marginTop: 20}}
      />

      <RBSheet
        ref={bottomSheet}
        height={250}
        openDuration={250}
        customStyles={{
          container: {},
        }}>
        <View>
          {listType.map(item => {
            return (
              <TouchableOpacity
                style={styles.typeContainer}
                onPress={() => {
                  setSelectedType(item);
                  bottomSheet?.current?.close();
                }}>
                <Text style={styles.typeText}>{item}</Text>
                {selectedType === item && (
                  <Icon
                    size={25}
                    color={Color.black}
                    name="checkmark-outline"
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </RBSheet>
    </AppContainer>
  );
};
export default HomeScreen;
