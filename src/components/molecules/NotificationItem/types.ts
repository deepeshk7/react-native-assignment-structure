import { ViewStyle } from 'react-native';
import { NotificationModel } from '../../../models/NotificationModel';

export interface NotificationItemProps {
  notification: NotificationModel;
  isSelectionMode: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  onToggleSelection?: () => void;
  style?: ViewStyle | ViewStyle[];
}