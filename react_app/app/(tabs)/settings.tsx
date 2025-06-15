import React from 'react'
import { Text, View } from 'react-native'
import Counter from '../../components/Counter'

const settings = () => {
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 20 }}>
                Counter
            </Text>
            <Counter />
        </View>
    )
}

export default settings