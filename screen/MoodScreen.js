// screen/MoodScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MoodScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you feeling today?</Text>

      <View style={styles.emojiRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Happy')}>
          <Text style={styles.emoji}>😊</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Sad')}>
          <Text style={styles.emoji}>😢</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Angry')}>
          <Text style={styles.emoji}>😠</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Focus')}>
          <Text style={styles.emoji}>😟</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9d6ff', // Figma wala soft purple background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  emoji: {
    fontSize: 40,
    marginHorizontal: 10,
  },
});


