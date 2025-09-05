import React, { useState } from 'react';
import { View } from 'react-native';
import { Header } from '../../molecules/Header';
import { NotificationsList } from '../../organisms/NotificationsList';
import { BottomSheet } from '../../organisms/BottomSheet';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { NotificationsTemplateProps } from './types';
import { styles } from './styles';
import { BottomSheetOption } from '../../organisms/BottomSheet/types';

export const NotificationsTemplate: React.FC<NotificationsTemplateProps> = ({
  notifications,
  isLoading,
  isSelectionMode,
  selectedCount,
  bottomSheetVisible,
  onNotificationPress,
  onNotificationLongPress,
  onToggleSelection,
  onBackPress,
  onRefresh,
  onShowBottomSheet,
  onHideBottomSheet,
  onDeleteSelected,
  onDisableSelectionMode,
  style
}) => {
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  const handleDeleteSelected = async () => {
    await onDeleteSelected?.();
    setShowSuccessBanner(true);
    setTimeout(() => setShowSuccessBanner(false), 3000);
  };

  const bottomSheetOptions: BottomSheetOption[] = [
    {
      id: 'mark-read',
      title: 'Marcar como leído',
      icon: 'check',
      onPress: () => {},
    },
    {
      id: 'delete',
      title: 'Eliminar notificaciones',
      icon: 'trash',
      onPress: handleDeleteSelected,
      destructive: true,
    },
    {
      id: 'delete-all',
      title: 'Eliminar todas las notificaciones',
      icon: 'trash',
      onPress: () => {},
      destructive: true,
    },
    {
      id: 'manage',
      title: 'Administrar notificaciones',
      icon: 'settings',
      onPress: () => {},
    },
  ];

  return (
    <View style={[styles.container, style]}>
      {showSuccessBanner && (
        <View style={styles.successBanner}>
          <Text color="white">Notificación eliminada exitosamente</Text>
        </View>
      )}
      
      {isSelectionMode ? (
        <View style={styles.selectionHeader}>
          <Button
            title="Cancelar"
            variant="secondary"
            size="small"
            onPress={onDisableSelectionMode}
          />
          <Text variant="subtitle">
            {selectedCount} seleccionada{selectedCount !== 1 ? 's' : ''}
          </Text>
          <Button
            title="Opciones"
            variant="primary"
            size="small"
            onPress={onShowBottomSheet}
            disabled={selectedCount === 0}
          />
        </View>
      ) : (
        <Header
          title="Mis notificaciones"
          showBackButton
          onBackPress={onBackPress}
        />
      )}

      {selectedCount > 0 && isSelectionMode && (
        <View style={styles.selectionActions}>
          <Button
            title="Eliminar notificación"
            variant="danger"
            size="medium"
            onPress={handleDeleteSelected}
            style={{ flex: 1 }}
          />
        </View>
      )}

      <NotificationsList
        notifications={notifications}
        isSelectionMode={isSelectionMode}
        loading={isLoading}
        onNotificationPress={onNotificationPress}
        onNotificationLongPress={onNotificationLongPress}
        onToggleSelection={onToggleSelection}
        onRefresh={onRefresh}
      />

      <BottomSheet
        visible={bottomSheetVisible}
        onClose={onHideBottomSheet || (() => {})}
        options={bottomSheetOptions}
      />
    </View>
  );
};
