import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Button from '../component/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const navigation = useNavigation();

  const loginFn = () => {
    if (username == '' && password == '') {
      return Alert.alert('Please enter a Username and Password');
    }
    if (username == '') {
      return Alert.alert('Please enter a Username');
    }
    if (password == '') {
      return Alert.alert('Please enter a Password');
    }
    let formData = {
      username: username.trim(),
      password: password.trim(),
    };
    AsyncStorage.removeItem('auth');
    axios
      .post('https://dummyjson.com/auth/login', formData)
      .then(res => {
        console.log('res======>', res.data);
        if (res?.status == 200) {
          console.log(res?.data);
          AsyncStorage.setItem('auth', JSON.stringify(res?.data));
          navigation.reset({index: 0, routes: [{name: 'Product'}]});
          // navigate('Product');
        }
      })
      .catch(err => {
        console.log(err);
      });
    // navigate('AppStart');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logintext}>Login Page</Text>
      <View style={styles.card}>
        <TextInput
          placeholder="Username"
          onChangeText={text => {
            setUsername(text);
          }}
          style={{fontSize: 20, color: '#000'}}
          placeholderTextColor={'#666'}
          value={username}
        />
      </View>

      <View style={[styles.card, {flexDirection: 'row'}]}>
        <View style={{width: 350}}>
          <TextInput
            placeholder="Password"
            onChangeText={text => {
              setPassword(text);
            }}
            style={{fontSize: 20, color: '#000'}}
            placeholderTextColor={'#666'}
            value={password}
            secureTextEntry={passwordVisible}
          />
        </View>
        <View style={styles.showPwd}>
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Text style={{color: '#555', fontSize: 16}}>
              {passwordVisible ? 'Show' : 'hide'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.btnView}>
        <Button
          title="Login"
          onPress={() => loginFn()}
          textStyle={{fontSize: 24, fontWeight: 'bold'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logintext: {
    fontSize: 20,
    paddingBottom: 40,
    alignSelf: 'center',
    color: '#666',
  },
  card: {
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  rightIcon: {
    flex: 0,
    right: 15,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  btnView: {
    paddingVertical: 20,
  },
  showPwd: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 40,
  },
});

export default Login;
