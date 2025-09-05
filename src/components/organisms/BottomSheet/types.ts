import { ViewStyle } from 'react-native';

export interface BottomSheetOption {
  id: string;
  title: string;
  icon?: string;
  onPress: () => void;
  destructive?: boolean;
}

export interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  options: BottomSheetOption[];
  style?: ViewStyle | ViewStyle[];
}
