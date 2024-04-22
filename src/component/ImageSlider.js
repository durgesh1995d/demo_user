// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';

// const screenWidth = Dimensions.get('screen').width;
// const screenHeight = Dimensions.get('screen').height;

// const ImageSlider = ({images, style}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Calculate the next index
//       const nextIndex = (currentIndex + 1) % images.length;
//       // Update the current index state
//       setCurrentIndex(nextIndex);
//     }, 1000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [currentIndex, images.length]);

//   console.log('ImageSlider====>', images);
//   return (
//     <View>
//       <FlatList
//         data={images}
//         horizontal
//         pagingEnabled={true}
//         showsHorizontalScrollIndicator={false}
//         initialScrollIndex={currentIndex}
//         getItemLayout={(data, index) => ({
//           length: screenWidth / 1.2, // Width of each item
//           offset: (screenWidth / 1.2) * index, // Offset of each item
//           index,
//         })}
//         renderItem={({item, index}) => {
//           return (
//             <View style={styles.contentmain}>
//               <Image
//                 key={index}
//                 source={{uri: item?.uri}}
//                 style={{
//                   width: screenWidth / 1.2,
//                   height: screenHeight / 4,
//                   borderRadius: 10,
//                 }}
//                 // resizeMode="contain"
//               />
//               {/* </View> */}
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   contentmain: {
//     paddingVertical: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#999',
//     marginHorizontal: 5,
//     marginTop: 10,
//     borderRadius: 20,
//   },
//   content: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });

// export default ImageSlider;

import React, {useState} from 'react';
import {View, FlatList, Image, Dimensions, StyleSheet} from 'react-native';

const ImageSlider = ({images, imageStyle}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {width: screenWidth} = Dimensions.get('window');

  const handleScroll = event => {
    const slideOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(slideOffset / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll}
        renderItem={({item}) => {
          return (
            <>
              <Image
                source={{uri: item}}
                style={[styles.image, imageStyle]}
                resizeMode="contain"
              />
            </>
          );
        }}
      />
      <View style={styles.pagination}>
        {images?.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width / 1.2,
    height: '100%',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
});

export default ImageSlider;
