import {StyleSheet} from 'react-native';
import {Responsive, Fonts, Color} from '../../Helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  margin20: {
    marginTop: 20,
  },
  movieRating: {
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: Responsive.font(4.5),
    color: Color.black,
    marginTop: 20,
  },
  movieSummary: {
    flex: 1,
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: Responsive.font(4),
    color: Color.black,
    marginTop: 20,
  },
});
