/** ALIASES */
import IColor = TSTemplate.Color
import IFlex = TSTemplate.Flex
import IShape = TSTemplate.Shape
import IText = TSTemplate.Atoms.Text

/** TYPE'S ORGANIZATION */
declare namespace TSTemplate.Molecules {
  /**
   * Interface for component's props that represent Button.
   * @interface Button
   */
  export interface Button extends IText, IColor, IShape, IFlex {
    selected?: boolean,
    asLabel?: boolean,
    isDisabled?: boolean,
    alignSelf?: string,
    capitalize?: boolean,
    onPress?: () => void,
  }
}