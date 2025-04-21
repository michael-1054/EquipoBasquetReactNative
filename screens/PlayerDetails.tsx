import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native'; // Importa RouteProp
import { RootStackParamList } from '../types/types'; // Importa el tipo de parámetros

// Tipo para las props, incluyendo 'route'
type PlayerDetailsRouteProp = RouteProp<RootStackParamList, 'PlayerDetails'>;

interface PlayerDetailsProps {
  route: PlayerDetailsRouteProp; // Tipamos la propiedad 'route' correctamente
}

const PlayerDetails: React.FC<PlayerDetailsProps> = ({ route }) => {
  const { playerId } = route.params; // Obtiene el ID del jugador desde la navegación
  const [player, setPlayer] = useState<{ name: string; position: string; bio: string } | null>(null);

  // Simula la carga de detalles de un jugador
  useEffect(() => {
    const fetchPlayerDetails = () => {
      // Definir un objeto de datos de jugadores con claves específicas
      const playerData = {
        '1': { name: 'LeBron James', position: 'Forward', bio: 'LeBron James es un jugador de baloncesto...' },
        '2': { name: 'Stephen Curry', position: 'Guard', bio: 'Stephen Curry es conocido por su tiro de tres puntos...' },
        // Añadir más jugadores según sea necesario
      };

      // Usar una aserción de tipo para asegurarse de que playerId es una clave válida
      setPlayer(playerData[playerId as keyof typeof playerData]);
    };

    fetchPlayerDetails();
  }, [playerId]);

  if (!player) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'url_to_image' }} style={styles.image} />
      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.position}>{player.position}</Text>
      <Text style={styles.bio}>{player.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 18,
    color: 'gray',
  },
  bio: {
    fontSize: 16,
    marginTop: 16,
  },
});

export default PlayerDetails;
