import { TouchableOpacityProps, ViewStyle } from 'react-native';

export interface CheckBoxProps extends Omit<TouchableOpacityProps, 'style'> {
  checked: boolean;
  onToggle: () => void;
  size?: number;
  style?: ViewStyle | ViewStyle[];
}
