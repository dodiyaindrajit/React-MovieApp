import {StyleSheet, Platform} from 'react-native';
import {Responsive, Fonts, Color} from '../../Helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: Color.whiteShadeFA,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: Responsive.font(3.5),
    color: Color.black,
  },
  itemContainer: {
    flex: 0.5,
    overflow: 'hidden',
    // width: Responsive.widthPx('40'),
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  movieName: {
    flex: 1,
    fontFamily: Fonts.OpenSans_Bold,
    fontSize: Responsive.font(4),
    color: Color.black,
  },
  movieRating: {
    flex: 1,
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: Responsive.font(3.5),
    color: Color.black,
  },
  summaryContainer: {
    height: 50,
  },
  movieSummary: {
    flex: 1,
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: Responsive.font(3),
    color: Color.black,
  },
  typeContainer: {
    padding: 15,
    backgroundColor: Color.whiteShadeFA,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeText: {
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: Responsive.font(4),
    color: Color.black,
  },
});
