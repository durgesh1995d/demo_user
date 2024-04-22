import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import Button from '../component/Button';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {productListingAction} from '../redux/actions';

const AddProduct = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [brand, setBrand] = useState('');
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const addProduct = () => {
    if (title == '' || category == '' || brand == '') {
      return Alert.alert('Please Enter a All Fields');
    }
    const form = {
      title: title?.trim(),
      category: category.trim(),
      brand: brand.trim(),
    };
    axios
      .post('https://dummyjson.com/products/add', form)
      .then(res => {
        setLoading(false);
        if (res.status == 200) {
          dispatch(productListingAction());
          Alert.alert('Product Added successfully');
          // console.log('update==223=>', res);
          navigate('Product');
        }
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <View style={styles.conntainer}>
      <Text style={styles.title}>Title </Text>
      <View style={styles.card}>
        <TextInput
          placeholder="Title"
          onChangeText={text => {
            setTitle(text);
          }}
          style={{fontSize: 20, color: '#000'}}
          value={title}
          placeholderTextColor={'#666'}
        />
      </View>
      <Text style={styles.title}>Brand </Text>
      <View style={styles.card}>
        <TextInput
          placeholder="brand"
          onChangeText={text => {
            setBrand(text);
          }}
          style={{fontSize: 20, color: '#000'}}
          value={brand}
          placeholderTextColor={'#666'}
        />
      </View>
      <Text style={styles.title}>Category </Text>

      <View style={styles.card}>
        <TextInput
          placeholder="category"
          onChangeText={text => {
            setCategory(text);
          }}
          style={{fontSize: 20, color: '#000'}}
          value={category}
          placeholderTextColor={'#666'}
        />
      </View>
      <View style={styles.btnView}>
        <Button
          title="Submit"
          onPress={() => addProduct()}
          textStyle={{fontSize: 24, fontWeight: 'bold'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conntainer: {
    padding: 20,
  },
  card: {
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  btnView: {
    paddingVertical: 20,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default AddProduct;
