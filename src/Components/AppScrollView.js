import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AppScrollView = (props) => {
  const { children } = props;
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default AppScrollView;
