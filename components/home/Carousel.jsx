import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const Carousel = () => {
    const slides=[
        "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
        "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",
       "https://shorturl.at/wEQW8"
    ]
  return (
    <View>
      <SliderBox>{slides}
      </SliderBox>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})