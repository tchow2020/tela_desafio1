import * as React from "react";
import {Text, TouchableOpacity, StyleSheet,TouchableOpacityProps} from "react-native"
import {Entypo} from "@expo/vector-icons";


interface Props extends TouchableOpacityProps{
    title: string

}

export function Button({title, ...rest}:Props ){
    return(
        <TouchableOpacity style={styles.container}>
            <Text>
                {title}
            </Text>

            <Entypo
                name="chevron-right"
                color="black"
                size={16}
            />
        </TouchableOpacity>
    )

    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#478565",
        height: 50,
        width: "100%",
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginBottom: 10,
    },

})