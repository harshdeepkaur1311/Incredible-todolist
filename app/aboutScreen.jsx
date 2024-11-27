import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import MainLayout from './mainLayout'

function AboutScreen  ({navigation})  {
  return (
    <MainLayout>
        <View style={styles.container}>
            <Text>About Screen</Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('home')}/>
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
export default AboutScreen