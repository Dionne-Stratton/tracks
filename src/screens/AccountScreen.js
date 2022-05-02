import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const AccountScreen = () => {
    return <Text style={{fontSize:48}} >AccountScreen</Text>
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <MaterialIcons name="account-circle" size={20} />
}

const styles = StyleSheet.create({})

export default AccountScreen