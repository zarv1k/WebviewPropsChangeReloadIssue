import React, {useCallback, useMemo, useState} from 'react';
import WebView from 'react-native-webview';
import {Button, StyleSheet, View} from 'react-native';
import {type WebViewSource} from 'react-native-webview/lib/WebViewTypes';
import {TestComponent} from './TestComponent.tsx';

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
    <View style={styles.container}>
      <TestComponent />
      <Button onPress={onPress} title="change webview style" color="#841584" />
      <WebView style={style} source={source} />
    </View>
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
