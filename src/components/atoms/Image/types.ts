import { ImageProps as RNImageProps, ViewStyle } from 'react-native';

export interface ImageProps extends Omit<RNImageProps, 'style'> {
  uri?: string;
  size?: number;
  borderRadius?: number;
  style?: ViewStyle | ViewStyle[];
}