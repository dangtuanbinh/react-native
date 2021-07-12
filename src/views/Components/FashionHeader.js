import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import COLORS from '../../Consts/colors'

const Header = (props) => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width:'100%',
        height:50,
        top:0,
        left:0,
        backgroundColor: COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        zIndex:1000
    },
    text:{
        fontSize:35,
        color:'#cfa829',
        fontFamily:'Vogue',
    }
})
export default Header
