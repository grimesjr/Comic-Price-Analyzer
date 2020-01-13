import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export function WatchList(props) {
  const data = ['banana', 'apple', 'pears'];
  return (
    <View style={styles.container}>
      {data.map(items => <Text style={styles.item}>{items}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    margin: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
})
