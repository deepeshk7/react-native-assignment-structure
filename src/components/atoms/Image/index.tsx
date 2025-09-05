import React from 'react';
import { View, Image as RNImage } from 'react-native';
import { ImageProps } from './types';
import { styles } from './styles';

export const Image: React.FC<ImageProps> = ({ 
  uri,
  source,
  size = 60,
  borderRadius = 8,
  style,
  ...props 
}) => {
  const imageSource = uri ? { uri } : source;

  return (
    <View 
      style={[
        styles.container,
        { 
          width: size, 
          height: size, 
          borderRadius 
        },
        style
      ]}
    >
      <RNImage
        source={imageSource}
        style={[styles.image, { borderRadius }]}
        {...props}
      />
    </View>
  );
};
