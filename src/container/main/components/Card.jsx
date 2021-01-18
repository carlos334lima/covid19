import React, {memo} from 'react'

import { Card as CardUI } from '../../../components'

import {
    LabelStyled,
    valueStyled,
    CardContentStyled 
} from './style'

function Card({ value, label, color}) {
    return (
        <CardUI>
            <CardContentStyled color={color}>
                <valueStyled>{value}</valueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card)