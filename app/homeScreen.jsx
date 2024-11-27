import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import MainLayout from './mainLayout'

function HomeScreen ({navigation})  {
  return (
    <MainLayout>
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button 
            title="Go to About"
            onPress={() => navigation.navigate('about')}/>
        </View>
    </MainLayout>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default HomeScreen