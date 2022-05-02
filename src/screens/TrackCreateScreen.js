import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = () => {
    return <Text style={{fontSize:48}} >TrackCreateScreen</Text>
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}



const styles = StyleSheet.create({})

export default TrackCreateScreen