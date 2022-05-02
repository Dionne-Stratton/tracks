import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({navigation}) => {

    const {state, signup} = useContext(AuthContext)
    
    return (
        <View style={styles.container}>
        <AuthForm 
            header="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            buttonText="Sign Up"
            onSubmit={signup}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Signin')} >
            <Text style={styles.link} >Already have an account? Sign in instead.</Text>
        </TouchableOpacity>
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
    link: {
        color: 'blue',
        marginTop: 30,
        fontSize: 16
    }
})

export default SignupScreen