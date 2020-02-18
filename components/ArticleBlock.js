import React from 'react'
import { Button } from 'react-native'

export const ArticleBlock = ({ navigation, indexKey, title, postID }) => (
	<article key={indexKey}>
		<h3>{title}</h3>
		ID: {postID}
		<Button title='Go to Homepage' onPress={() => navigation.navigate('Home')} />
	</article>
)
