import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Tax = () => {
  return (
    <View style={styles.container}>
      <Text>Tax</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Tax;
