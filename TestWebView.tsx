import React, {useCallback, useMemo, useState} from 'react';
import WebView from 'react-native-webview';
import {Button, StyleSheet, Text, View} from 'react-native';
import {type WebViewSource} from 'react-native-webview/lib/WebViewTypes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import '@gorhom/bottom-sheet'; // comment me out to fix the issue with webview full reload

const min = 0;
const max = 100;

export const TestWebView: React.FC = () => {
  const [marginTop, setMarginTop] = useState(min);

  const style = useMemo(() => {
    return {flex: 1, marginTop: marginTop};
  }, [marginTop]);

  const onPress = useCallback(() => {
    setMarginTop(Math.random() * (max - min) + min);
  }, []);

  const source: WebViewSource = useMemo(
    () => ({uri: 'https://reactnative.dev'}),
    [],
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <View>
        <Text>1. Press "Get started" on webpage</Text>
        <Text>2. Press "change webview style" to reproduce the issue with webivew full reload on Android</Text>
        <Text>3. Comment out the import from '@gorhom/bottom-sheet'</Text>
        <Text>4. Open dev menu and press reload</Text>
        <Text>5. Repeat steps 1-2 to ensure that there is NO more issue with webview full reload on Android w/o import from '@gorhom/bottom-sheet'</Text>
      </View>
      <Button onPress={onPress} title="change webview style" color="#841584" />
      <WebView style={style} source={source} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
