import '../_mockLocation'
import React, {useContext} from 'react'
import { StyleSheet} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
import {Text} from 'react-native-elements'
import { withNavigationFocus } from 'react-navigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'


const TrackCreateScreen = ({isFocused}) => {
    const { addLocation } = useContext(LocationContext)

    const [err] = useLocation(isFocused, addLocation)

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>Create</Text>
            <Map />
            {err ? <Text>Please allow tracking.</Text> : null}
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

export default withNavigationFocus(TrackCreateScreen) 