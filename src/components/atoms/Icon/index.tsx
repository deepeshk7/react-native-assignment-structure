import React from 'react';
import { View } from 'react-native';
import { Text } from '../Text';
import { IconProps } from './types';
import { styles } from './styles';
import { colors } from '../../../utils/colors';

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color = colors.text.primary,
  style 
}) => {
  // Icon mapping for system icons
  const iconMap: Record<string, string> = {
    'chevron-left': '‹',
    'bell-slash': '🔕',
    'bell': '🔔',
    'check': '✓',
    'x': '✕',
    'trash': '🗑',
    'settings': '⚙️',
    'dot': '•'
  };

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <Text 
        style={[
          styles.icon, 
          { fontSize: size, color, lineHeight: size }
        ]}
      >
        {iconMap[name] || name}
      </Text>
    </View>
  );
};
