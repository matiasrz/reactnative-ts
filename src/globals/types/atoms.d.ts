/** ALIASES */
import IColor = TSTemplate.Color
import IFlex = TSTemplate.Flex
import IMargin = TSTemplate.Margin
import IPadding = TSTemplate.Padding
import IPosition = TSTemplate.Position
import IShape = TSTemplate.Shape

/** TYPE'S ORGANIZATION */
declare namespace TSTemplate.Atoms {
  /**
   * Interface for component's props that represent Container.
   * @interface Container
   */
  export interface Container extends IMargin, IPadding, IPosition, IFlex, IShape, IColor {
    overflow?: string,
    textAlign?: string,
    fontSize?: string,
    isOverTabNav?: string,
    onPress?: () => void
  }

  /**
   * Interface for component's props that represent Text.
   * @interface Text
   */
  export interface Text extends IMargin, IPadding, Pick<IColor, "color"> {
    fontSize?: string,
    fontWeight?: string | number,
    textAlign?: string,
    lineHeight?: string,
    textDecoration?: boolean
  }
}