import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Search = () => {
  return (
    <SafeAreaView>
    <View style={styles.searchContainer}>
    <TouchableOpacity>
    <Feather name='search' size={24} style={styles.searchIcon}/>
    </TouchableOpacity>
    <View style={styles.searchWrapper}>
    <TextInput style={styles.searchInput}
    value=""
    onPressIn={navigateToSearchScreen}
    placeholder="What are you looking for"
    />
    </View>
    <View>
    <TouchableOpacity style={styles.searchBtn}>
    <Ionicons name='camera-outline' size={SIZES.xlarge} color={COLORS.offwhite}/>
    </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Search