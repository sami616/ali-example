import React from 'react'
import { ArticleBlock } from './ArticleBlock'

export const FrontpageItem = ({ posts, navigation }) =>
	posts.map((post, index) => <ArticleBlock navigation={navigation} title={post.title.rendered} indexKey={index} postID={post.id} />)
