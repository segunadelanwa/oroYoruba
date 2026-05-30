import React from 'react';
import {
  Modal,
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

interface LoadingModalProps {
  visible: boolean;
}

const LoadingModal = ({ visible }: LoadingModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <ImageBackground
        source={require('../assets/images/img_1.jpeg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.text}>Loading...</Text>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', // optional dark overlay
  },
  text: {
    marginTop: 12,
    color: '#fff',
    fontSize: 25,
    fontWeight: '600',
  },
});

export default LoadingModal;