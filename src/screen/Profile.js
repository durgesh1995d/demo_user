import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [userDetail, setUserDetail] = useState('');
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    const savedData = await AsyncStorage.getItem('auth');
    let data = '';
    if (savedData) {
      data = JSON.parse(savedData);
    }
    if (data?.token) {
      await axios
        .get('https://dummyjson.com/auth/me', {
          headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: data.token,
          },
        })
        .then(res => {
          setLoading(false);
          if (res?.status == 200) {
            setUserDetail(res?.data);
          }
        })
        .catch(error => {
          setLoading(false);
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const logoutFn = () => {
    AsyncStorage.removeItem('auth');
    navigation.reset({
      index: 0,
      routes: [{name: 'Auth'}],
    });
  };
  return (
    <View style={styles.conntainer}>
      <View style={styles.logoutPosition}>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => logoutFn()}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <View>
          <View style={{height: 120}}>
            {userDetail?.image && (
              <Image
                source={{uri: userDetail?.image}}
                style={{height: 100, width: 80}}
                resizeMode="contain"
              />
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.txtStyle}>Name : </Text>
            <Text style={styles.txtStyle}>
              {userDetail?.firstName + ' ' + userDetail?.lastName}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtStyle}>Phone No. : </Text>
            <Text style={styles.txtStyle}>{userDetail?.phone}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtStyle}>Email : </Text>
            <Text style={styles.txtStyle}>{userDetail?.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtStyle}>Date of Birth : </Text>
            <Text style={styles.txtStyle}>{userDetail?.birthDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.txtStyle}>Gender: </Text>
            <Text style={styles.txtStyle}>{userDetail?.gender}</Text>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  conntainer: {
    padding: 20,
  },
  logoutPosition: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  logoutBtn: {
    padding: 15,
    backgroundColor: '#777',
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  txtStyle: {
    color: '#000',
    fontSize: 20,
  },
});

export default Profile;
