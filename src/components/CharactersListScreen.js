import React from 'react';
import {Button, View, Text} from 'react-native';
import {charactersQuery} from '../client';
import {useQuery} from '@apollo/client';

function CharactersListScreen({navigation}) {
  const {loading, error, data} = useQuery(charactersQuery);

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

  return data.characters.results.map(({id, name}) => (
    <View key={id}>
      <Button
        title={name}
        onPress={() => navigation.navigate('Details', {id})}
      />
    </View>
  ));
}

export default CharactersListScreen;
