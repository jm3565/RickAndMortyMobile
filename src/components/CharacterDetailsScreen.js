import React from 'react';
import {Dimensions, View, Text, Image} from 'react-native';
import {characterQuery} from '../client';
import {useQuery} from '@apollo/client';

const dimensions = Dimensions.get('window');

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
    <View style={{flex: 1}}>
      <Text>{data.character.name}</Text>
      <Image
        style={{width: dimensions.width, height: 400}}
        source={{
          uri: data.character.image,
        }}
      />
    </View>
  );
}

export default CharacterDetailsScreen;
