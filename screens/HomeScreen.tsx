import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PlayerCard from '../components/PlayerCard'; // Componente de tarjeta para el jugador
import { RootStackParamList } from '../types/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList, // Usamos el tipo de nuestro stack
  'Home' // Especificamos la pantalla actual
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp; // Tipamos la propiedad navigation
}

// Definir un tipo para un jugador
interface Player {
    id: string;
    name: string;
    position: string;
    image: string;
  }
  
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [players, setPlayers] = useState<Player[]>([]);

  // Aquí simulas la carga de los jugadores (podría venir de una API o base de datos)
  useEffect(() => {
    const fetchPlayers = () => {
      // Simulando una lista de jugadores
      const playerList: Player[] = [
        { id: '1', name: 'LeBron James', position: 'Forward', image: 'url_to_image_1' },
        { id: '2', name: 'Stephen Curry', position: 'Guard', image: 'url_to_image_2' },
        // Añade más jugadores
      ];
      setPlayers(playerList);
    };

    fetchPlayers();
  }, []);

  const renderItem = ({ item } : {item: Player}) => (
    <TouchableOpacity onPress={() => navigation.navigate('PlayerDetails', { playerId: item.id })}>
      <PlayerCard player={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Jugadores</Text>
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
