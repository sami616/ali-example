import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Feed } from './Feed'

export const List = ({ navigation }) => (
	<View style={styles.container}>
		<Feed navigation={navigation} />
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
