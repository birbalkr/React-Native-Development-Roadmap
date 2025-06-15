import { decrement, increment, reset } from '@/redux/slice/counterSlice'
import { Button } from '@react-navigation/elements'
import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <View>
            <Text>Counter: {count}</Text>
            <Button title='Increment'
                onPress={() => dispatch(increment())}
            />
            <Button
                title='Decrement'
                onPress={() => dispatch(decrement())}
            />
            <Button
                title='Reset'
                onPress={() => dispatch(reset())}
            />
        </View>
    )
}

export default Counter