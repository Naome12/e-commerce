import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather } from '@expo/vector-icons'

const Welcome = () => {
  return (
    <View>
    <View style={styles.container}>
    <Text style={styles.welcomeTxt(COLORS.black,SIZES.xSmall)}>{" "}Find the most</Text>
    <Text style={styles.welcomeTxt(COLORS.primary,0)}>{" "}Luxurious furniture</Text>
    </View>
    <View style={styles.searchContainer}>
    <TouchableOpacity>
    <Feather name='search' size={24} style={styles.searchIcon}/>
    <View style={styles.searchWrapper}></View>
    </TouchableOpacity>
    <Text></Text>
    </View>
    </View>
  )
}

export default Welcome