// components/JobCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const JobCard = ({ title, location }) => {
  return (
    <TouchableOpacity 
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => console.log(`Job selected: ${title}`)}
    >
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {title || 'Untitled Position'}
      </Text>
      
      <View style={styles.locationContainer}>
        <Text style={styles.locationIcon}>📍</Text>
        <Text style={styles.location} numberOfLines={1} ellipsizeMode="tail">
          {location || 'Location not specified'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#2c3e50',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 14,
  },
  location: {
    color: '#7f8c8d',
    fontSize: 14,
    flex: 1,
  },
});

export default JobCard;