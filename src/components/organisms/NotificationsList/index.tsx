import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { NotificationItem } from '../../molecules/NotificationItem';
import { EmptyState } from '../../molecules/EmptyState';
import { NotificationsListProps } from './types';
import { styles } from './styles';
import { NotificationModel } from '../../../models/NotificationModel';

export const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications,
  isSelectionMode,
  loading = false,
  onNotificationPress,
  onNotificationLongPress,
  onToggleSelection,
  onRefresh,
  style
}) => {
  const renderItem = ({ item }: { item: NotificationModel }) => (
    <NotificationItem
      notification={item}
      isSelectionMode={isSelectionMode}
      onPress={() => onNotificationPress?.(item)}
      onLongPress={() => onNotificationLongPress?.(item)}
      onToggleSelection={() => onToggleSelection?.(item)}
    />
  );

  const keyExtractor = (item: NotificationModel) => item.id;

  if (notifications.length === 0 && !loading) {
    return (
      <EmptyState
        title="Aún no tienes notificaciones"
        description="Te avisaremos en cuanto haya novedades que te interesen."
      />
    );
  }

  return (
    <View style={[styles.container, style]}>
      <FlatList
        style={styles.list}
        data={notifications}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={onRefresh}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
