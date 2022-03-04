/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PreventDoubleClick from './PreventDoubleClick';

const Presable = PreventDoubleClick(TouchableOpacity);

const PresableOpacity = (props) => {
  const { children, style, isDisable, onPress } = props;

  return isDisable ? (
    <View style={style}>{children}</View>
  ) : (
    <Presable style={style} onPress={onPress}>
      {children}
    </Presable>
  );
};

export default PresableOpacity;
