import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import ArticleBlock from './ArticleBlock.tsx';

class FrontpageItem extends React.Component {
  render () {
    let posts = this.props.posts
    console.log(posts);

    let postLoop = posts.map((post, index)=> {
      return (
        <ArticleBlock title={post.title.rendered} indexKey={index} postID={post.id} />
      )
    })
    
    return (
      <div>
        {postLoop}         
      </div>
    )
  }

}

export default FrontpageItem;