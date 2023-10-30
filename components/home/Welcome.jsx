import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './Welcome.style';
import { COLORS, SIZES } from '../../constants';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const navigateToSearchScreen = () => {
    console.log('Navigating to Search screen');
    navigation.navigate('Search');
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black,SIZES.xSmall)}>{" "}Find the most</Text>
        <Text style={styles.welcomeTxt(COLORS.primary,0)}>{" "}Luxurious furniture</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity >
          <Ionicons name='camera-outline' size={24} style={styles.searchIcon}/>
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              placeholder="What are you looking for"
            />
          </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name='search' size={SIZES.xlarge} color={COLORS.offwhite} onPress={navigateToSearchScreen}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Welcome;
