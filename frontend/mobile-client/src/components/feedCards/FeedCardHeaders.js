import React from 'react'
import styled from 'styled-components'

import { fakeAvatar } from '../../utils/constants'

const avatarSize = 40;
const avatarRadius = avatarSize / 2;

const Root = styled.View`
    height:50;
    flexDirection: row;
    alignItem: center;
`;

const MetaContainer = styled.View`
    flex: 1;
    alignSelf: stretch
`
const MetaTopContainer = styled.View`
    flex: 1;
    flexDirection: row;
    alignItems:center;
    justifyContent: flex-start;
    alignSelf: stretch;
`
const MetaButtomContainer = styled.View`
    flex: 0.8;
    alignSelf: stretch;
    alignItems: flex-start;
    justifyContent: center;
`
const MetaFullName = styled.Text`
    fontSize:16;
    fontWeight:bold;
    color: ${props => props.theme.SECONDARY};
`

const MetaText = styled.Text`
    fontSize:14;
    fontWeight:600;
    color: ${props => props.theme.LIGHT_GRAY};
`

const AvatarContainer = styled.View`
    flex: 0.2;
    justifyContent: center;
    alignSelf: stretch;
`

const Avatar = styled.Image`
    height: ${avatarSize};
    width: ${avatarSize};
    borderRadius: ${avatarRadius}
`

const username = 'melodyleonard'
const firstname = 'Oparaugo'
const lastname = 'Melody'
const createdAt = '1 day ago'
const avatar = fakeAvatar

function FeedCardHeaders() {
    return (
        <Root>
            <AvatarContainer>
                <Avatar source={{ uri: avatar }} />
            </AvatarContainer>
            <MetaContainer>

                <MetaTopContainer>
                    <MetaFullName>
                        {firstname} {lastname}
                    </MetaFullName>

                    <MetaText style={{ marginLeft: 5 }}>
                        @{username}
                    </MetaText>
                </MetaTopContainer>

                <MetaButtomContainer>
                    <MetaText>
                        {createdAt}
                    </MetaText>
                </MetaButtomContainer>

            </MetaContainer>
        </Root>
    )
}

export default FeedCardHeaders;