import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { ButtonProps } from './types';
import { styles } from './styles';
import { colors } from '../../../utils/colors';

export const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'medium',
  loading = false,
  disabled = false,
  style,
  ...props 
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : colors.primary} />
      ) : (
        <Text 
          variant="subtitle" 
          color={variant === 'primary' ? 'white' : 'primary'}
          style={styles.text}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};