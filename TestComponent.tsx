import React, {FC} from 'react';
import {useAnimatedStyle} from 'react-native-reanimated';
import {Text, View} from 'react-native';

export const TestComponent: FC = () => {
  console.log(useAnimatedStyle); // comment me out to fix the issue with webview full reload on Android

  return (
    <View>
      <Text>1. Press "Get started" on webpage</Text>
      <Text>
        2. Press "change webview style" and you can see the webivew full
        reload on Android, that's the issue.
      </Text>
      <Text>3. Comment out the line 'console.log(useAnimatedStyle);' in this component</Text>
      <Text>4. Open dev menu and press reload</Text>
      <Text>
        5. Repeat steps 1-2 to ensure that there is NO more issue with webview
        full reload on Android
      </Text>
    </View>
  );
};
