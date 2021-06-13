import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import client from './src/client';
import {ApolloProvider} from '@apollo/client';
import CharactersListScreen from './src/components/screens/CharactersListScreen';
import CharacterDetailsScreen from './src/components/screens/CharacterDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Characters" component={CharactersListScreen} />
          <Stack.Screen
            name="Details"
            component={CharacterDetailsScreen}
            options={({route}) => ({title: route.params.title})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
