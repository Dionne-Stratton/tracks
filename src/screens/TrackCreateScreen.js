import React from 'react'
import { StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import {Text} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'


const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>Create</Text>
            <Map />
        </SafeAreaView>
        )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}



const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 50
    },
    container: {
        margin: 15,
        flex: 1,
        marginTop: 50
    }
})

export default TrackCreateScreen