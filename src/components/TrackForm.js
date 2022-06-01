import React, { useContext } from "react";
import { Input, Button, Text } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()

    return <>
    <Input onChangeText={changeName} placeholder="Enter Track Name" />
    {recording? <Button title="Stop" onPress={stopRecording} />: <Button title="Start Tracking" onPress={startRecording} />}
    <Text></Text>
    {!recording && locations.length ? (
        <Button title="Save" onPress={saveTrack}/>
    ) : null}
    </>
}

export default TrackForm