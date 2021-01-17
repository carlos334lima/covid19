import { Typography } from 'components/index'
import styled from 'styled-components'
import { typography, CardContent } from '../../../components'

export const LabelStyled = styled(Typography)`
font-weight: 500;
font-size: 1.5 rem;
`
export const ValueStyled = styled(Typography)`
font-weight: 400;
font-size: 2.5 rem;
`
export const CardContentStyled = styled(CardContent)`

border-left: 8px solid ${({ color }) => color || '#5d78ff'}

`
export const CardPanelContentStyled = styled(CardContent)`
display: flex;
justify-content: space-between;
padding: 25px
`
export const ItemStyled = styled(Typography)`
display: flex;
justify-content: space-between;
padding: 150px
`

