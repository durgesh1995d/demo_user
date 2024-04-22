import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistors} from './src/redux/store';
import NavigateSwitch from './src/navigation/NavigateSwitch';
import AppStart from './src/navigation/AppStart';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistors}>
          <NavigationContainer>
            {/* <NavigateSwitch /> */}
            <AppStart />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
