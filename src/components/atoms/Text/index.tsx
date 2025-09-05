import React from 'react';
import { Text as RNText } from 'react-native';
import { TextProps } from './types';
import { styles } from './styles';

export const Text: React.FC<TextProps> = ({ 
  variant = 'body', 
  color = 'primary', 
  children, 
  style, 
  ...props 
}) => {
  return (
    <RNText 
      style={[
        styles.base,
        styles[variant],
        styles[`color_${color}`],
        style
      ]} 
      {...props}
    >
      {children}
    </RNText>
  );
};