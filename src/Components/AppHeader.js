import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Color, Responsive, Fonts} from '../Helper';
import Icon from 'react-native-vector-icons/Ionicons';

const AppHeader = props => {
  const {
    text,
    onBackPress,
    containerStyle,
    onFavoritePress,
    onHidePress,
    favIcon,
    hideIcon,
    onMorePress,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {onBackPress && (
        <TouchableOpacity style={styles.backContainer} onPress={onBackPress}>
          <Icon size={25} color={Color.black} name="arrow-back-outline" />
        </TouchableOpacity>
      )}
      <Text style={styles.hederText} numberOfLines={1}>
        {text}
      </Text>
      {onFavoritePress && (
        <TouchableOpacity onPress={onFavoritePress} style={styles.endIcon}>
          <Icon size={17} color={favIcon} name="heart-outline" />
        </TouchableOpacity>
      )}
      {onHidePress && (
        <TouchableOpacity onPress={onHidePress} style={styles.endIcon}>
          <Icon size={17} color={hideIcon} name="eye-off-outline" />
        </TouchableOpacity>
      )}
      {onMorePress && (
        <TouchableOpacity onPress={onMorePress} style={styles.endIcon}>
          <Icon size={17} color={Color.black} name="apps-outline" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    height: Responsive.heightPx('8'),
    alignItems: 'center',
  },
  backContainer: {
    flexDirection: 'row',
    marginEnd: 20,
    alignItems: 'center',
  },
  hederText: {
    fontFamily: Fonts.OpenSans_SemiBold,
    fontSize: Responsive.font(4),
    color: Color.black,
    flex: 1,
    flexWrap: 'wrap',
    marginStart: 10,
  },
  endIcon: {
    flexDirection: 'row',
    marginStart: 20,
    alignItems: 'center',
  },
});
