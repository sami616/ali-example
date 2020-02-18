import React from 'react'
import { Text, View } from 'react-native'

export const Detail = ({ route }) => {
	const { itemId } = route.params
	return (
		<View>
			<Text>{JSON.stringify(itemId)}</Text>
		</View>
	)
}
