import { TouchableOpacity,Text, View ,ScrollView} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Welcome } from '../components';
const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.location}>Shanghai China</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
            <Fontisto name="shopping-bag" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
      <Welcome/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
