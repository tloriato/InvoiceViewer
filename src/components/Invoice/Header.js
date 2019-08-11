import React from 'react';
import { View, StyleSheet, Text, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  common: {
    boxSizing: 'border-box',
    borderWidth: '2',
    borderStyle: 'solid', 
  },
  header: {
    width: '100%',
    height: '12%',
    borderColor: 'black',
    display: 'inline-box',
  },
  logo: {
    width: '20%',
    height: '100%',
    borderColor: 'red',
  },
  title: {
    width: '50%',
    height: '100%',
    borderColor: 'blue',
  },
  info: {
    width: '30%',
    height: '100%',
    borderColor: 'green',
  },
});

const Header = () => {
  return (
    <View style={{...styles.common, ...styles.header}}>

      <View style={{...styles.common, ...styles.logo}}>
        <Text>Oi</Text>
      </View>

      <View style={{...styles.common, ...styles.title}}>
        <Text>Oi</Text>
      </View>

      <View style={{...styles.common, ...styles.info}}>
        <Text>Oi</Text>
      </View>

    </View>
  )
};

export default Header;