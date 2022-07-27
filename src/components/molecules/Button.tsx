import React from 'react'
import { PixelRatio } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Container } from '@/atoms/Container'
// import Loading from '@/atoms/Loading'
import { Text } from '@/atoms/Text'
// import colors from 'globals/colors'

// import { Arrow } from 'icons/bayicons'
// import { withPress } from '@/hocs/withPress'


const ActionWrapper: React.FC<TSTemplate.Molecules.Button> = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ width: '100%' }}>
    {children}
  </TouchableOpacity>
)

export const Button: React.FC<TSTemplate.Molecules.Button> = ({
  children,
  color,
  borderColor,
  backgroundColor,
  selected,
  asLabel = false,
  alignSelf,
  borderWidth = '1px',
  borderRadius = '22px',
  height = '37px',
  paddingLeft = '20px',
  paddingRight = '20px',
  marginTop = '5px',
  marginRight = '0px',
  marginBottom = '5px',
  marginLeft = '0px',
  fontWeight,
  fontSize,
  lineHeight,
  capitalize = true,
  opacity = 1,
  isDisabled = false,
  onPress
}) => {
  const fontSizeByScreen = fontSize || (PixelRatio.get() <= 2 ? '20px' : '18px')
  const bgColor = selected ? (borderColor || color || 'white') : (backgroundColor || 'miriam')
  const bdrColor = selected ? (backgroundColor || 'miriam') : (borderColor || 'white')
  const txtColor = selected ? (backgroundColor || color) : (color || bdrColor)
  const baseButton = (
    <Container
      height={height}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      justifyContent="center"
      borderRadius={borderRadius}
      backgroundColor={bgColor}
      borderColor={bdrColor}
      borderWidth={borderWidth}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      alignSelf={alignSelf || 'flex-start'}
      // opacity={isDisabled ? '0.3' : opacity}
    >
      <Text
        color={txtColor}
        fontSize={fontSizeByScreen}
        textAlign="center"
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        style={{ textTransform: capitalize ? 'capitalize' : 'none' }}
      >
        {children}
      </Text>
    </Container>
  )

  return asLabel || isDisabled ? baseButton : <ActionWrapper onPress={onPress}>{baseButton}</ActionWrapper>
}

// export const ArrowButton: React.FC<ArrowButtonProps> = ({
//   backgroundColor,
//   color,
//   direction = 'UP',
//   size = 25,
//   isDisabled = false,
//   isLoading = false,
//   alignSelf,
//   onClick
// }) => {
//   const mappedColor: string = color ? (colors[color] || color) : 'white'
//   const baseButton = (
//     <Container
//       backgroundColor={backgroundColor}
//       opacity={isDisabled ? '0.5' : '1'}
//       alignSelf={alignSelf}
//     >
//       <Arrow direction={Direction[direction]} color={mappedColor} width={size} height={size} />
//     </Container>
//   )

//   if (isLoading) {
//     return (
//       <Container alignSelf={alignSelf}>
//         <Loading color={mappedColor} size={size * 1.5} />
//       </Container>
//     )
//   }

//   return isDisabled ? baseButton : <ActionWrapper onClick={onClick}>{baseButton}</ActionWrapper>
// }
