import { ViewStyle } from 'react-native';
import { NotificationModel } from '../../../models/NotificationModel';

export interface NotificationsListProps {
  notifications: NotificationModel[];
  isSelectionMode: boolean;
  loading?: boolean;
  onNotificationPress?: (notification: NotificationModel) => void;
  onNotificationLongPress?: (notification: NotificationModel) => void;
  onToggleSelection?: (notification: NotificationModel) => void;
  onRefresh?: () => void;
  style?: ViewStyle | ViewStyle[];
}