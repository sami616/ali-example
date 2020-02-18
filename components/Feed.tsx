import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FrontpageItem from './FrontPageItem.tsx';

class Feed extends React.Component {
    
    constructor () {
        super();
        this.state = {
          posts: []
        }
     
      }
      
      componentDidMount (){
        const newsItems = 'https://urbanmuslimz.com/wp-json/wp/v2/news?per_page=5&page=1';
        fetch(newsItems)
        .then(response => response.json())
        .then(response => {
          this.setState({
            posts: response
          })
        })
      }
     
      render() {
        
        return (
    
          <div className="container">
              <FrontpageItem posts={this.state.posts} />
          </div>
    
        );
      }

}

export default Feed;