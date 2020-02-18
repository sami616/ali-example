import React from 'react'
import { FrontpageItem } from './FrontPageItem'

export const Feed = ({ navigation }) => {
	const [posts, setPosts] = React.useState([])

	React.useEffect(() => {
		fetch('https://urbanmuslimz.com/wp-json/wp/v2/news?per_page=5&page=1')
			.then(r => r.json())
			.then(p => setPosts(p))
	}, [])

	return (
		<div className='container'>
			<FrontpageItem navigation={navigation} posts={posts} />
		</div>
	)
}
