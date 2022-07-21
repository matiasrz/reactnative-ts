/** TYPE'S ORGANIZATION */
declare namespace TSTemplate {
  /**
   * Interface for Avatar Props component
   * @interface Avatar
   */
  export interface Avatar extends Shape {
    imageUri: string
  }

  /**
   * Interface for component's props that represent color parameters.
   * @interface Color
   */
  export interface Color {
    color?: string,
    backgroundColor?: string,
    borderColor?: string,
    border?: string,
    opacity?: string
  }

  /**
   * Interface for component's props that represent flex position in Object.
   * @interface Flex
   */
  export interface Flex {
    display?: string,
    flex?: string,
    flexDirection?: string,
    flexWrap?: string,
    flexShrink?: string,
    justifyContent?: string,
    alignItems?: string,
    alignSelf?: string,
  }
  
  /**
   * Interface for component's props that represent margin in objects.
   * @interface Margin
   */
  export interface Margin {
    marginTop?: string,
    marginRight?: string,
    marginBottom?: string,
    marginLeft?: string,
    margin?: string,
  }

  /**
   * Interface for component's props that represent padding in objects.
   * @interface Padding
   */
  export interface Padding {
    paddingTop?: string,
    paddingRight?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    padding?: string,
  }

  /**
   * Structure to define how the object will be defined, where
   * Key(string) Simbolize a person name
   * Value(string) - String(hex, rgb or rgba)
   * @type {Object} colorObject
   * */
    export interface Palette {
    [key: string]: string
  }

  /**
   * Interface for component's props that represent distance from sides(top, right, bottom & left) in objects.
   * @interface Position
   */
  export interface Position {
    position?: string,
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
    zIndex?: string
  }

  /**
   * Interface for Pressable Props component
   * @interface Avatar
   */
  export interface Pressable {
    onPress?: function | (() => void),
  }

  /**
   * Interface for component's props that represent Spacer.
   * @interface Spacer
   */
  export interface Spacer extends Margin, Padding, Shape {}

  /**
   * Interface for component's props that represent shape on DOM Objects.
   * @interface Shape
   */
  export interface Shape {
    width?: string | number,
    height?: string | number,
    borderRadius?: string,
    borderColor?: string,
    borderWidth?: string
  }
}