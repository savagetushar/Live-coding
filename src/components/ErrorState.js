
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ErrorState = ({ message, onRetry }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>⚠️</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity 
          style={styles.retryButton} 
          onPress={onRetry}
          activeOpacity={0.7}
        >
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    padding: 24,
  },
  content: {
    backgroundColor: '#ffebee',
    padding: 24,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#f44336',
    alignItems: 'center',
    width: '100%',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  message: {
    color: '#b71c1c',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#f44336',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  retryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ErrorState;