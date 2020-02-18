import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Listing, Detail } from '../screens'

const Stack = createStackNavigator()

export const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen name='Home' component={Home} options={{ title: 'Welcome to my app!' }} />
			<Stack.Screen name='Listing' component={Listing} options={{ title: 'WP Posts Listing' }} />
			<Stack.Screen name='Detail' component={Detail} options={{ title: 'WP Posts Details' }} />
		</Stack.Navigator>
	</NavigationContainer>
)
