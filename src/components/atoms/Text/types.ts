import { TextProps as RNTextProps, TextStyle } from 'react-native';

export type TextVariant = 'title' | 'subtitle' | 'body' | 'caption';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'white' | 'red' | 'green';

export interface TextProps extends Omit<RNTextProps, 'style'> {
  variant?: TextVariant;
  color?: TextColor;
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}
