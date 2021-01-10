import React from 'react';
import {StyleSheet, Text, View, button, Button} from 'react-native';

export default function Home(props) {
  const {navigation} = props;
  return (
    <View style={styles.card}>
      <View style={styles.contenedortit}>
        <Text style={styles.userName}> Alessandro Neyra</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    backgroundColor: '#F9D2CD',
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
  userName: {
    alignContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',

  },
});
