import { ViewStyle } from 'react-native';

export type IconName = 
  | 'chevron-left' 
  | 'bell-slash' 
  | 'bell' 
  | 'check' 
  | 'x' 
  | 'trash' 
  | 'settings' 
  | 'dot';

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: ViewStyle | ViewStyle[];
}
