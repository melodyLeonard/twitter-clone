import React, { Component } from 'react'

import styled from 'styled-components/native'

import FeedCard from '../components/feedCards/feedCard'

const Root = styled.View`
    flex: 1;
    paddingTop: 5;
    backgroundColor: #f2f2f2;
`;

const List = styled.FlatList``

const T = styled.Text

class HomeScreen extends Component {
    state = {}
    render() {
        return (
            <Root>
                <List>
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                </List>
            </Root>
        )
    }
}

export default HomeScreen