import Toast from 'react-native-root-toast';
import Color from './Color';
import {CommonActions} from '@react-navigation/routers';
import {Alert} from 'react-native';

const showToast = message => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: -80,
    backgroundColor: Color.white,
    textColor: Color.black,
    opacity: 0.95,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};

const navigate = (navigation, screen) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: screen}],
    }),
  );
};

const showAlert = (title, message) => {
  Alert.alert(title, message, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};

const showErrorAlert = message => {
  Alert.alert('Error', message, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};

const showNoInternet = () => {
  Alert.alert('Error', 'No internet connection please try again', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};

const Utility = {
  showToast,
  showAlert,
  showErrorAlert,
  showNoInternet,

  navigate,
};

export default Utility;
