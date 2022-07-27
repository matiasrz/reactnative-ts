import styled from 'styled-components/native'

import colors from '@/globals/variables'

/**
 * @module Text defined to handle base parameters(props) that will help to build more custom components.
 * @param {TextProps} TextProps
 * XS(15px), SM(20px), MD(25px), LG(35px), XL(40px) 
 */
export const Text = styled.Text<TSTemplate.Atoms.Text>`
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight};`};
  ${(props) => props.textAlign && `text-align: ${props.textAlign};`}
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.textDecoration && 'text-decoration: underline;'};
  color: ${(props) => (props.color ? colors[props.color] : 'white')};
  font-size: ${(props) => props.fontSize || '25px'};
  margin-top: ${(props) => props.marginTop || '0'};
  margin-right: ${(props) => props.marginRight || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};
  margin-left: ${(props) => props.marginLeft || '0'};
  text-decoration-color: ${(props) => (props.color ? colors[props.color] : 'white')};
`

/**
 * @module HeaderText extension from Text module that will adapt more properties(props) for header components.
 * @param {TextProps} TextProps Inherited from Text component
 */
export const HeaderText = styled(Text)`
  ${(props) => props.margin && `margin: ${props.margin};`}
  font-size: ${(props) => props.fontSize || '40px'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  line-height: ${(props) => props.lineHeight || '40px'};
  margin-top: ${(props) => props.marginTop || '0'};
  margin-right: ${(props) => props.marginRight || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};
  margin-left: ${(props) => props.marginLeft || '0'};
`
