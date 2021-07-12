import React from 'react'
import { View, StyleSheet} from 'react-native'
import COLORS from '../../Consts/colors'
import stories from '../../Consts/stories'
import Story from '../Components/Story'


const FashionStories = () => {
    return (
        <View >
            <View >
                {stories.map((story,index) => {
                    return (
                        <Story story={story} key={index}/>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        marginTop: 30,
        marginBottom:30,
        alignItems:'center',
    },
    container: {
        minWidth:380,
        borderTopWidth:1,
        borderTopColor: COLORS.dark,
        paddingTop:30,
        borderBottomWidth:1,
        borderBottomColor: COLORS.dark,
    }
})

export default FashionStories
