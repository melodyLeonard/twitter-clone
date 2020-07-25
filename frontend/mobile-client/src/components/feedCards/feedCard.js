import React from 'react'
import styled from 'styled-components'

import FeedCardHeaders from './FeedCardHeaders'
import FeedCardButtom from './FeedCardButtom'


const Root = styled.View`
    minHeight:100;
    padding: 7px;
    marginVertical: 5;
    backgroundColor: ${props => props.theme.WHITE}
    width: 100%;
    shadowColor: ${props => props.theme.SECONDARY}
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.1;
`;

const CardContentContainer = styled.View`
    flex: 1;
    padding: 10px 20px 10px 0px;
`
const cardContentText = styled.Text`
    fontSize: 14;
    textAlign: left;
    fontWeight: 500;
    color: ${props => props.theme.SECONDARY};
`

const text = 'Hey this is just a demo text for all twits'

function FeedCard() {
    return (
        <Root>
            <FeedCardHeaders />
            <CardContentContainer>
                <cardContentText>
                    {text}
                </cardContentText>
            </CardContentContainer>
            <FeedCardButtom />
        </Root>
    )
}

export default FeedCard;