import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {productListingAction, productSearchAction} from '../redux/actions';
import Button from '../component/Button';
import ImageSlider from '../component/ImageSlider';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductListing = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const saveData = async () => {
    const savedData = await AsyncStorage.getItem('auth');
    let data = '';
    if (savedData) {
      data = JSON.parse(savedData);
    }
    console.log('auth saved', data);
  };

  const products = useSelector(state => state.product);
  const [productList, setProductList] = useState([]);
  const [searchtxt, setSearchtxt] = useState('');
  const [searchlist, setSearchlist] = useState([]);
  const [searchloading, setSearchloading] = useState(false);

  useEffect(() => {
    saveData();
    dispatch(productListingAction());
  }, []);

  useEffect(() => {
    if (products.product_list?.products.length > 0) {
      setProductList(products.product_list?.products);
    }
  }, [products.product_list]);

  const searchfn = data => {
    setSearchloading(true);
    axios
      .get('https://dummyjson.com/products/search?q=' + data)
      .then(res => {
        setSearchloading(false);
        if (res.status == 200) {
          if (res?.data?.products?.length > 0) {
            setSearchlist(res?.data?.products);
          } else {
            setSearchlist([]);
          }
        } else {
        }
      })
      .catch(err => {
        setSearchloading(false);
        console.log(err);
      });
    setSearchtxt(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconPosition}>
        <Text style={styles.title}>Search Here </Text>
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => navigate('Profile')}>
          <Image
            source={require('../assets/profile_icon.png')}
            style={{height: 20, width: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.card, {paddingVertical: 5}]}>
        <TextInput
          placeholder="Search"
          onChangeText={text => {
            searchfn(text);
          }}
          style={{fontSize: 20, color: '#000'}}
          value={searchtxt}
          placeholderTextColor={'#666'}
        />
      </View>

      {products.product_list_loading || searchloading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={searchtxt?.length > 0 ? searchlist : productList}
          renderItem={({item, index}) => {
            return (
              <View key={index} style={styles.card}>
                <View style={{height: 200}}>
                  <ImageSlider images={item?.images} />
                </View>
                <View style={styles.row}>
                  <Text style={styles.textStyle}>{item?.title}</Text>
                  <Text style={styles.textStyle}>
                    {'  '}
                    {item?.brand}{' '}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.textStyle}>{item?.category}</Text>
                </View>
                <View
                  style={[
                    styles.row,
                    {justifyContent: 'space-around', paddingTop: 10},
                  ]}>
                  <Button
                    textStyle={{paddingHorizontal: 20}}
                    title={'Edit'}
                    onPress={() => navigate('Edit Product', {id: item?.id})}
                  />
                  <Button
                    title="Info"
                    textStyle={{paddingHorizontal: 20}}
                    onPress={() => navigate('Product Detail', {id: item?.id})}
                  />
                </View>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 24, color: '#333'}}>No Data</Text>
              </View>
            );
          }}
        />
      )}
      <View style={styles.addPosition}>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigate('Add Product')}>
          <Text style={styles.btnText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  card: {
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  iconStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    padding: 3,
    borderColor: '#888',
    // marginBottom: -10,
  },
  iconPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    color: '#000',
    fontSize: 20,
  },
  addPosition: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  addBtn: {
    padding: 15,
    backgroundColor: '#777',
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductListing;
