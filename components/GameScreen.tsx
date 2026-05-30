import React from 'react';
import {ImageBackground, Alert,Pressable, View,Text,StyleSheet,} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
//   const navigation = useNavigation();

      const handleTayoPress = () => {
    Alert.alert('TAYO', 'Button clicked!');
   console.log('🔥 PRESSED FIRED');
    // Example:
    // navigation.navigate('GameScreen');
  };


  return (
  <View style={{ flex: 1 }}>
    <ImageBackground
      source={require('../assets/images/img_2.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <Pressable style={styles.content} onPress={handleTayoPress}>
        <View />
      </Pressable>
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
 touchable: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default HomeScreen;