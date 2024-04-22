import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ImageSlider from '../component/ImageSlider';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {productListingAction} from '../redux/actions';

const ProductDetail = props => {
  const navigation = useNavigation();
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (props?.route?.params?.id) {
      setLoading(true);
      setId(props?.route?.params?.id);
      axios
        .get('https://dummyjson.com/products/' + props?.route?.params?.id)
        .then(res => {
          // console.log('res====>', res.data);
          setLoading(false);
          if (res.status == 200) {
            setDetailData(res.data);
          }
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
        });
    }
    if (props?.route?.params?.data) {
      setDetailData(props?.route?.params?.data);
    }
  }, [props?.route?.params]);

  const deleteFn = () => {
    axios
      .delete('https://dummyjson.com/products/' + id)
      .then(res => {
        if (res.data) {
          // console.log('response====>', res.data);
          Alert.alert('Product Deleted Successfully');
          dispatch(productListingAction());
          navigation.navigate('Product');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <View style={styles.container}>
          <View style={{height: 200}}>
            <ImageSlider
              images={detailData?.images}
              imageStyle={{width: Dimensions.get('window').width / 1.1}}
            />
          </View>
          <View style={styles.rowDirection}>
            <Text style={styles.txtStyle}> Rs-{detailData?.price}</Text>
            <Text style={[styles.txtStyle, {paddingHorizontal: 20}]}>
              only {detailData?.stock} left
            </Text>
          </View>
          <View style={styles.rowDirection}>
            <Text style={styles.txtStyle}>
              Discount {detailData?.discountPercentage}%
            </Text>
            <Text style={styles.txtStyle}>{detailData?.rating} Rating</Text>
          </View>
          <View style={styles.rowDirection}>
            <Text style={styles.txtStyle}>Title :</Text>
            <Text style={styles.txtStyle}>{detailData?.title}</Text>
          </View>
          <View style={styles.rowDirection}>
            <Text style={styles.txtStyle}>Brand :</Text>
            <Text style={styles.txtStyle}>{detailData?.brand}</Text>
          </View>
          <View style={styles.rowDirection}>
            <Text style={styles.txtStyle}>Category :</Text>
            <Text style={styles.txtStyle}>{detailData?.category}</Text>
          </View>

          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.txtStyle}>Description :</Text>
            <Text style={[styles.txtStyle, {paddingVertical: 5}]}>
              {detailData?.description}
            </Text>
          </View>
        </View>
      )}
      <View style={styles.addPosition}>
        <TouchableOpacity style={styles.addBtn} onPress={() => deleteFn()}>
          <Text style={styles.btnText}>Delete Product</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 20,
  },
  rowDirection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  txtStyle: {
    color: '#000',
    fontSize: 18,
    padding: 8,
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

export default ProductDetail;
