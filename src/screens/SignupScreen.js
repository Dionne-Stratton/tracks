import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import axios from "axios";

const SignupScreen = ({navigation}) => {

    const {state, signup} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    


    return (
        <View style={styles.container} >
        <Text h3 style={{marginBottom: 25}} >Signup</Text>
        <Input 
            label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Input 
            label="Password" 
            value={password} 
            onChangeText={setPassword} 
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            />
        <Text style={styles.errorMessage} >{state.errorMessage}</Text>
        <Button 
            title="SignUp"
            onPress={() => signup({email, password})}
        />
        </View>
        )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginBottom: 15
    }
})

export default SignupScreen