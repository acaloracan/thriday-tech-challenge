import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Payments = () => {
  return (
    <View style={styles.container}>
      <Text>Payments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Payments;
