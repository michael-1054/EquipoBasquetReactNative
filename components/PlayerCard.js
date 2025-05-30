// src/components/PlayerCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlayerCard = ({ player }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: player.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.position}>{player.position}</Text>
      <Text style={styles.stats}>PTS: {player.points}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    color: '#555',
  },
  stats: {
    fontSize: 14,
    color: '#888',
  },
});

export default PlayerCard;
