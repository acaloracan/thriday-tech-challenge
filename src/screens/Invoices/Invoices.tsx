import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Invoices = () => {
  return (
    <View style={styles.container}>
      <Text>Invoices</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Invoices;
