import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SigninScreen = ({navigation}) => {

    const {state, signin} = useContext(AuthContext)
    
    return (
        <View style={styles.container}>
        <AuthForm 
            header="Sign In to Tracker"
            errorMessage={state.errorMessage}
            buttonText="Sign In"
            onSubmit={signin}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
            <Text style={styles.link} >Don't have an account? Sign up instead.</Text>
        </TouchableOpacity>
        </View>
        )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen