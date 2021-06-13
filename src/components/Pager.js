import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Pager = ({totalPages, currentPage, onPageChange}) => {
  return (
    <View style={styles.container}>
      <View>
        {currentPage > 1 && (
          <Button
            style={styles.previousBtn}
            title="Previous"
            onPress={() => onPageChange(currentPage - 1)}
          />
        )}
      </View>
      <View>
        <Text>
          {currentPage} of {totalPages}
        </Text>
      </View>
      <View>
        {currentPage < totalPages && (
          <Button
            style={styles.nextBtn}
            title="Next"
            onPress={() => onPageChange(currentPage + 1)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previousBtn: {},
  nextBtn: {},
});

export default Pager;
