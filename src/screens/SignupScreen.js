import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-web'

const SignupScreen = ({navigation}) => {
    
    return (
        <>
        <Text style={{fontSize:48}} >SignupScreen</Text>
        <Button 
            title="SignIn"
            onPress={() => navigation.navigate('Signin')}
        />
        </>
        )
}

const styles = StyleSheet.create({})

export default SignupScreen