import React from 'react'
import { View, StyleSheet,Text,ImageBackground } from 'react-native'

const LifestyleProduct = (props) => {
    return (
        <View style={styles.body}>
            <ImageBackground source={props.product.productImage} resizeMode='contain' style={styles.background} />
            <Text>{props.product.productName}</Text>
            <Text>{props.product.productPrice}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        marginRight:20
    },
    background:{
        height:150,
        width:100
    },
})
export default LifestyleProduct
