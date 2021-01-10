import React from 'react';
import {StyleSheet, Text, View, button, Button} from 'react-native';

export default function Home(props) {
  const {navigation} = props;
  return (
    <View style={styles.card}>
      <View style={styles.contenedortit}>
        <Text style={styles.userName}> Optimizacion Pasifico TOdo riezgo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 130,
    backgroundColor: '#559204',
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 15,
  },
  contenedortit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
