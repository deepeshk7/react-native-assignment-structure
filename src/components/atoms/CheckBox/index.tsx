import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '../Icon';
import { CheckBoxProps } from './types';
import { styles } from './styles';

export const CheckBox: React.FC<CheckBoxProps> = ({ 
  checked, 
  onToggle, 
  size = 24,
  style,
  ...props 
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        checked ? styles.checked : styles.unchecked,
        { width: size, height: size },
        style
      ]}
      onPress={onToggle}
      {...props}
    >
      {checked && <Icon name="check" size={size * 0.7} color="#FFFFFF" />}
    </TouchableOpacity>
  );
};
