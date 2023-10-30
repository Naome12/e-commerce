import { TextInput, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather,Ionicons } from '@expo/vector-icons'
import styles from './Search.style'
import { COLORS, SIZES } from '../constants/index'
import { useNavigation } from '@react-navigation/native'

const Search = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView>
    <View style={styles.searchContainer}>
    <TouchableOpacity>
    <Ionicons name='camera-outline' size={24} style={styles.searchIcon}/>
    </TouchableOpacity>
    <View style={styles.searchWrapper}>
    <TextInput 
    style={styles.searchInput}
    value=''
    onPressIn={()=>{}}
    placeholder='What are you looking for'/>
    </View>
    <View>
    <TouchableOpacity style={styles.searchBtn}>
    <Feather name='search' size={SIZES.xlarge} color={COLORS.offwhite}/>
    </TouchableOpacity>
    </View>
    
    </View>
    </SafeAreaView>
  )
}

export default Search