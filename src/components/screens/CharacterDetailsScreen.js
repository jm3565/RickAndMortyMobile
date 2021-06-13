import React from 'react';
import {Dimensions, StyleSheet, View, Text, Image} from 'react-native';
import {characterQuery} from '../../client';
import {useQuery} from '@apollo/client';

const dimensions = Dimensions.get('window');
const MARGINS = {
  VERTICAL: 10,
  HORIZONTAL: 10,
};
const IMAGE_DIMENSIONS = {
  width: dimensions.width - MARGINS.HORIZONTAL * 2,
  height: dimensions.width - MARGINS.HORIZONTAL * 2,
};

function CharacterDetailsScreen({route}) {
  const {id} = route.params;

  const {loading, error, data} = useQuery(characterQuery, {
    variables: {
      id,
    },
  });

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error :(</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={[IMAGE_DIMENSIONS, styles.image]}
        source={{
          uri: data.character.image,
        }}
      />
      <Text>Status: {data.character.status}</Text>
      <Text>Species: {data.character.species}</Text>
      <Text>Gender: {data.character.gender}</Text>
      <Text>Origin: {data.character.origin.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: MARGINS.VERTICAL,
    marginHorizontal: MARGINS.HORIZONTAL,
  },
  image: {
    borderRadius: 15,
  },
});

export default CharacterDetailsScreen;
