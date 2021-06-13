import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Pressable,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {charactersByPageQuery} from '../../client';
import {useQuery} from '@apollo/client';
import Pager from '../Pager';

function CharactersListScreen({navigation}) {
  const [page, setPage] = useState(1);
  const {loading, error, data} = useQuery(charactersByPageQuery, {
    variables: {
      page,
    },
  });

  const handlePageChange = newPage => {
    setPage(newPage);
  };

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
    <SafeAreaView style={styles.conatiner}>
      <FlatList
        ListHeaderComponent={() => (
          <Pager
            totalPages={data.characters.info.pages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        )}
        data={data.characters.results}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Details', {id: item.id, title: item.name})
            }>
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {flex: 1},
});

export default CharactersListScreen;
