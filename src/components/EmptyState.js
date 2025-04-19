// components/EmptyState.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyState = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📭</Text>
      <Text style={styles.message}>{message || 'No items found'}</Text>
      <Text style={styles.subMessage}>Check back later for new listings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  message: {
    color: '#2c3e50',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  subMessage: {
    color: '#7f8c8d',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default EmptyState;