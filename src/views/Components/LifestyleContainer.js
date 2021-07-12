import React from 'react'
import { View,ScrollView,StyleSheet } from 'react-native'
import LifestyleItem from './LifestyleItem'
import lifeStyle from '../../Consts/lifeStyle'

const LifestyleContainer = () => {
    return (
        <View style={styles.container}>
            <ScrollView  >
                {lifeStyle.map((item,index) => {
                    return <LifestyleItem item={item} key={index}/>
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20
    }
})
export default LifestyleContainer
