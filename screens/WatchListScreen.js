import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WatchList } from '../components/WatchList'

export default function WatchListScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <WatchList/>
    </View>
  )
}

WatchListScreen.navigationOptions = {
  title: 'Watch List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    margin: 20,
  },

});
