import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ladyImage from '../assets/images/lady.jpg';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IT's OK NOT To BE OKAY!!</Text>

      <Image source={ladyImage} style={styles.image} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Mood')}
      >
        <Text style={styles.buttonText}>Let Us Help You</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9d6ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#3f3d56',
  },
  image: {
    width: 300,
    height: 280,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#3f3d56',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

