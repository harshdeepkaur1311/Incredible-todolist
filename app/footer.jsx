import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
      <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
});

export default Footer