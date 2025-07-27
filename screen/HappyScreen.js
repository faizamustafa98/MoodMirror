// screen/HappyScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function HappyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>You're glowing today! 🌟</Text>
      <TextInput
        style={styles.input}
        placeholder="Write about your happiness..."
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ffe0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    height: 150,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },
});

