import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class ArticleBlock extends React.Component {
    
    render () {
        return (
        <article key={this.props.indexKey}>
            <h3>{this.props.title}</h3>
            ID: {this.props.postID}
            <Button
                title="Go to Homepage"
                onPress={() => navigation.push('HomePage')}
            />
        </article>
        )
    }
}

export default ArticleBlock;

