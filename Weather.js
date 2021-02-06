import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Weather(props){
    return(

        <View style={styles.container}>
            <Text>{props.temp}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})