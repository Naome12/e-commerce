import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper/src';

const slides = [
  require('../../assets/chair2.jpg'),
  require('../../assets/chair1.jpg'),
  require('../../assets/chairs.png'),
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Swiper
          loop={false}
          showsPagination={true}
          paginationStyle={styles.paginationContainer}
          dot={<View style={styles.dot}/>}
          activeDot={<View style={styles.activeDot}/>}
          onIndexChanged={onIndexChanged}
          style={styles.wrapper}
        >
          {slides.map((imageUrl, index) => (
            <View key={index} style={styles.slide}>
              <Image source={imageUrl} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
      </View>

       );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: width - 40,
    height: 200,
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  wrapper: {
    height: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationContainer:{
    bottom:10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#bbb',
  },
  activeDot:{
    height:10,
    width:10,
    borderRadius:5,
    margin:5,
    backgroundColor:'#717171'
  }
});

export default Carousel;
