import React from 'react'
import styled from 'styled-components'
import { SimpleLineIcons, Entypo, } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

import { colors } from '../../utils/constants'

const iconSize = 20

const Root = styled.View`
    height: 40;
    flexDirection: row;
`;

const Button = styled(TouchableOpacity)`
    flex:1;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-around;
    paddingHorizontal: 32px;
`;

const ButtonText = styled.Text`
    fontSize: 14;
    fontWeight: 500;
    color: ${props => props.theme.LIGHT_GRAY}
`;

const favouriteCount = 3
const isFavorite = false

function FeedCardButtom() {
    return (
        <Root>
            <Button>
                <SimpleLineIcons name="bubble" size={iconSize} color={colors.LIGHT_GRAY} />
                <ButtonText>
                    {favouriteCount}
                </ButtonText>
            </Button>

            <Button>
                <Entypo name="retweet" size={iconSize} color={colors.LIGHT_GRAY} />
                <ButtonText>
                    {favouriteCount}
                </ButtonText>
            </Button>

            <Button>
                <Entypo name="heart" size={iconSize} color={isFavorite ? 'red' : colors.LIGHT_GRAY} />
                <ButtonText>
                    {favouriteCount}
                </ButtonText>
            </Button>
        </Root>
    )
}

export default FeedCardButtom;