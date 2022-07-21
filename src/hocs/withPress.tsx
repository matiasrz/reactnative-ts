import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import IPressable = TSTemplate.Pressable

export function withPress<T extends Required<IPressable> = Required<IPressable>>(
  WrappedComponent: any
) {
  const componentWithPress = ({ onPress, ...props } : T) => (
    <TouchableOpacity style={{ width: '100%' }} onPress={onPress}>
      <WrappedComponent {...props}/>
    </TouchableOpacity>
  )

  return componentWithPress
}