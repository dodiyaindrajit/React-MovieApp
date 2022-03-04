import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AppLoader from './Components/AppLoader';
import {Loader, Fonts, Responsive, Color, Const} from './Helper';
import Route from './Router/Route';
import {SafeAreaView} from 'react-native-safe-area-context';

const StartComponent = () => {
  const [isNet, setNet] = useState(true);

  // Added event listeners for internet connection checking
  useEffect(() => {
    NetInfo.fetch().then(state => {
      global.isInternet = state.isConnected;
      setNet(state.isConnected);
    });
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('NetInfo->', state);
      global.isInternet = state.isConnected;
      setNet(state.isConnected);
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.flexBox}>
      {!isNet && (
        <View style={styles.noInternetContainer}>
          <Text style={styles.text}>{Const.lang.t('common.noInternet')}</Text>
        </View>
      )}
      <AppLoader ref={e => Loader.setLoader(e)} />
      <Route />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexBox: {
    flex: 1,
  },
  noInternetContainer: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: Responsive.font(4),
    color: Color.white,
  },
});

export default StartComponent;
