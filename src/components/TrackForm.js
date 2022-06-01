import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)

    return <>
    <Input onChangeText={changeName} placeholder="Enter Track Name" />
    {recording? <Button title="Stop" onPress={stopRecording} />: <Button title="Start Tracking" onPress={startRecording} />}
    </>
}

export default TrackForm