import React from 'react'
import { Button, Text, View } from 'react-native'

export const Home = ({ navigation }) => (
	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>
			<h1>Welcome Screen</h1>
		</Text>
		<Button title='Go to Post Listing page' onPress={() => navigation.push('Listing')} />
	</View>
)
