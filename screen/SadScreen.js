// screen/SadScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function SadScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>You're not alone. 💙</Text>
      <TextInput
        style={styles.input}
        placeholder="Write about what's bothering you..."
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1e0ff',
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

