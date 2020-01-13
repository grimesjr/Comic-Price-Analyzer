import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Graph } from '../components/Graph';


export default function MyCollection() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.graphContainer}>
        <Graph/>
      </View>
      <Text style={styles.header}>Collection</Text> 
      {/**
       * List of comics 
       */}
    </ScrollView>
  );
}

MyCollection.navigationOptions = {
  title: 'My Collection',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    margin: 20,
  },
  header: {
    fontSize: 24,
    borderBottomWidth: 1,
    
  },
  graphContainer: {
    
  },
  ListContainer: {

  }

});

