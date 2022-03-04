import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Responsive, Color, Fonts } from '../Helper';
import PresableOpacity from './PresableOpacity';

const AppButton = (props) => {
  const { text, onPress, containerStyle, disable } = props;
  return (
    <PresableOpacity
      style={[styles.container, disable && styles.disableButton, containerStyle]}
      isDisable={disable}
      onPress={() => (onPress ? onPress() : {})}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </PresableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.orange00,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  disableButton: {
    backgroundColor: Color.grayShadeB9,
  },
  textStyle: {
    fontFamily: Fonts.OpenSans_Regular,
    fontSize: Responsive.font(4),
    color: Color.white,
    fontWeight: '600',
  },
});
