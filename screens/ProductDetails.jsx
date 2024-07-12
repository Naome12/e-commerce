import { TouchableOpacity,View, Text,Image } from 'react-native'
import React,{useState} from 'react'
import styles from './productDetails.style'
import { Ionicons, FontAwesome, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'



const ProductDetails = ({navigation}) => {
  const [count,setCount]=useState(1);

  const increment= ()=>{
    if(count<5){
      setCount(count+1);
    }
  }
  const decrement= ()=>{
    if(count>1){
      setCount(count-1);
    }
    
  }

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
      <Text style={styles.ratingText}>(4.9)</Text>
    </View>
      <View style={styles.rating}>
     <TouchableOpacity onPress={()=>increment()}>
     <SimpleLineIcons name='plus' size={20}/>
     </TouchableOpacity>
      <Text style={styles.ratingText}>{count}</Text>
      <TouchableOpacity onPress={()=>decrement()}>
      <SimpleLineIcons name='minus' size={20}/>
      </TouchableOpacity>
    </View>
    </View>
      <View style={styles.descriptionWrapper}>
      <Text style={styles.description}>Description</Text>
      <Text style={styles.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellendus. Natus dignissimos vitae asperiores reiciendis delectus, beatae adipisci inventore possimus, quis molestias minima ratione labore veritatis aliquid! Odio, incidunt! Magnam</Text>
      <View style={{marginBottom: SIZES.small}}>
      <View style={styles.location}>
      <View style={{flexDirection:"row"}}>
      <Ionicons name='location-outline' size={20}/>
      <Text> Dallas</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
      <Text> Free Delivery</Text>
      </View>
      </View>
      </View>
      <View style={styles.cartRow}>
      <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
      <Text style={styles.cartTitle}>BUY NOW</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
      <Fontisto name='shopping-bag' size={25} color={COLORS.lightwhite}/>
      </TouchableOpacity>
      </View>
      </View>
      </View>
    </View>
  )
}

export default ProductDetails