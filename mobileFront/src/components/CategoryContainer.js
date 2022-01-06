import React from 'react'
import {  Text, TouchableOpacity,StyleSheet } from 'react-native'

export const CategoryContainer = (props) => {
    return (
        <TouchableOpacity style={styles.containerType}>
            <Text style={styles.textType}>
                {props.name}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    containerType:{
        flexDirection:'column',
        borderWidth:4,
        borderColor: '#C3CFD9',
        alignItems: 'center',
        height:100,
        width:130,
        margin:4,
        flexGrow:1,
    },
    textType:{
        fontSize:20,
        fontWeight:"100",
        padding:28
    }
})