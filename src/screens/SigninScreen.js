import React, { useContext } from 'react'
import { View, StyleSheet} from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'

const SigninScreen = () => {

    const {state, signin} = useContext(AuthContext)
    
    return (
        <View style={styles.container}>
        <AuthForm 
            header="Sign In to Tracker"
            errorMessage={state.errorMessage}
            buttonText="Sign In"
            onSubmit={signin}
        />
        <NavLink 
            touchText="Don't have an account? Sign up instead."
            linkTo='Signup'
        />
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
        marginBottom: 120
    }
})

export default SigninScreen