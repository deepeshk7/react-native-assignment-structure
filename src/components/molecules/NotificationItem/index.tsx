import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../atoms/Text';
import { Image } from '../../atoms/Image';
import { CheckBox } from '../../atoms/CheckBox';
import { NotificationItemProps } from './types';
import { styles } from './styles';

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  isSelectionMode,
  onPress,
  onLongPress,
  onToggleSelection,
  style
}) => {
  const handlePress = () => {
    if (isSelectionMode && onToggleSelection) {
      onToggleSelection();
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        notification.isSelected && styles.selected,
        style
      ]}
      onPress={handlePress}
      onLongPress={onLongPress}
      activeOpacity={0.7}
    >
      {isSelectionMode && (
        <View style={styles.checkboxContainer}>
          <CheckBox 
            checked={notification.isSelected}
            onToggle={onToggleSelection || (() => {})}
          />
        </View>
      )}
      
      <View style={styles.content}>
        <View style={styles.leftSection}>
          {notification.image && (
            <Image 
              uri={notification.image}
              size={60}
              borderRadius={8}
            />
          )}
        </View>
        
        <View style={styles.centerSection}>
          <View style={styles.textContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              {notification.hasRedDot && <View style={styles.redDot} />}
              <Text variant="subtitle" style={styles.title}>
                {notification.title}
              </Text>
            </View>
            
            <Text variant="body" color="secondary" style={styles.description}>
              {notification.description}
            </Text>
            
            <Text variant="caption" color="tertiary" style={styles.timestamp}>
              {notification.timestamp}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
