import { ViewStyle } from 'react-native';
import { NotificationModel } from '../../../models/NotificationModel';

export interface NotificationsTemplateProps {
  notifications: NotificationModel[];
  isLoading: boolean;
  isSelectionMode: boolean;
  selectedCount: number;
  bottomSheetVisible: boolean;
  onNotificationPress?: (notification: NotificationModel) => void;
  onNotificationLongPress?: (notification: NotificationModel) => void;
  onToggleSelection?: (notification: NotificationModel) => void;
  onBackPress?: () => void;
  onRefresh?: () => void;
  onShowBottomSheet?: () => void;
  onHideBottomSheet?: () => void;
  onDeleteSelected?: () => void;
  onDisableSelectionMode?: () => void;
  style?: ViewStyle | ViewStyle[];
}
