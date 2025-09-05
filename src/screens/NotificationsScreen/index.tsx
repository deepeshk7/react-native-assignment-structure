import React from 'react';
import { View } from 'react-native';
import { NotificationsTemplate } from '../../components/templates/NotificationsTemplate';
import { useNotifications } from '../../hooks/useNotifications';
import { NotificationModel } from '../../models/NotificationModel';
import { NotificationsScreenProps } from './types';
import { styles } from './styles';

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ navigation }) => {
  const {
    notifications,
    isLoading,
    isSelectionMode,
    selectedCount,
    bottomSheetVisible,
    toggleSelection,
    enableSelectionMode,
    disableSelectionMode,
    showBottomSheet,
    hideBottomSheet,
    deleteSelected,
    loadNotifications
  } = useNotifications();

  const handleNotificationPress = (notification: NotificationModel) => {
    console.log('Notification pressed:', notification.title);
  };

  const handleNotificationLongPress = (notification: NotificationModel) => {
    if (!isSelectionMode) {
      enableSelectionMode();
      toggleSelection(notification.id);
    }
  };

  const handleToggleSelection = (notification: NotificationModel) => {
    toggleSelection(notification.id);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <NotificationsTemplate
        notifications={notifications}
        isLoading={isLoading}
        isSelectionMode={isSelectionMode}
        selectedCount={selectedCount}
        bottomSheetVisible={bottomSheetVisible}
        onNotificationPress={handleNotificationPress}
        onNotificationLongPress={handleNotificationLongPress}
        onToggleSelection={handleToggleSelection}
        onBackPress={handleBackPress}
        onRefresh={loadNotifications}
        onShowBottomSheet={showBottomSheet}
        onHideBottomSheet={hideBottomSheet}
        onDeleteSelected={deleteSelected}
        onDisableSelectionMode={disableSelectionMode}
      />
    </View>
  );
};