import React from 'react';
import { View } from 'react-native';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import { EmptyStateProps } from './types';
import { styles } from './styles';

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  style
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        {icon || <Icon name="bell-slash" size={48} />}
      </View>
      
      <View style={styles.textContainer}>
        <Text variant="subtitle" style={styles.title}>
          {title}
        </Text>
        <Text variant="body" color="secondary" style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};