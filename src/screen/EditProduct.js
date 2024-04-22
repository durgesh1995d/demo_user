import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '../component/Button';
import {useNavigation} from '@react-navigation/native';

const EditProduct = props => {
  const {navigate} = useNavigation();
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (props?.route?.params?.id) {
      setLoading(true);
      setId(props?.route?.params?.id);
      axios
        .get('https://dummyjson.com/products/' + props?.route?.params?.id)
        .then(res => {
          setLoading(false);
          if (res.status == 200) {
            console.log('Success===>', res.data);
            setDetailData(res.data);
            setTitle(res.data?.title);
          }
        })
        .catch(err => {
          setLoading(false);
          console.log(err);
        });
    }
  }, [props?.route?.params]);

  const update = () => {
    if (title == '') {
      return Alert.alert('Please Enter a title');
    }
    const form = {
      title: title?.trim(),
    };
    // form.append('title', title?.trim());
    axios
      .put('https://dummyjson.com/products/' + props?.route?.params?.id, form)
      .then(res => {
        setLoading(false);
        if (res.status == 200) {
          console.log('update==223=>', res);
          setDetailData(res.data);
          navigate('Product Detail', {data: res.data});
          // setTitle(res.data?.title);
        }
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <View style={styles.conntainer}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <View>
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
          <View style={styles.btnView}>
            <Button
              title="Submit"
              onPress={() => update()}
              textStyle={{fontSize: 24, fontWeight: 'bold'}}
            />
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
});

export default EditProduct;
