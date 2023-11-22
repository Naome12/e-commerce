import { TouchableOpacity,View, Text,Image } from 'react-native'
import React from 'react'
import styles from './productDetails.style'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { COLORS } from '../constants'


const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Ionicons name='chevron-back-circle' size={30}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{}}>
      <Ionicons name='heart' size={30} color={COLORS.primary}/>
      </TouchableOpacity>
      </View>
      <Image 
      source={require('../assets/chair2.jpg')}
      style={styles.image}
      />
      <View style={styles.details}>
      <View style={styles.titleRow}>
      <Text style={styles.title}>Product</Text>
      <View style={styles.priceWrapper}>
      <Text style={styles.price}>$ 660.88</Text>
      </View>
      </View>
      <View style={styles.ratingRow}>
      <View style={styles.rating}>
      {[1, 2, 3, 4, 5].map((index) => (
        <FontAwesome
          key={index}
          name="star"
          size={24}
          color="gold"
        />
      ))}
    </View>
      <View style={styles.rating}>
      {[1, 2, 3, 4, 5].map((index) => (
        <FontAwesome
          key={index}
          name="star"
          size={24}
          color="gold"
        />
      ))}
    </View>
    </View>
      
      </View>
    </View>
  )
}

export default ProductDetails