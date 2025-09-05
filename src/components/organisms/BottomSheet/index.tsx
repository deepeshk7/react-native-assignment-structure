import React from 'react';
import { 
  View, 
  Modal, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  ScrollView 
} from 'react-native';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import { BottomSheetProps } from './types';
import { styles } from './styles';

export const BottomSheet: React.FC<BottomSheetProps> = ({
  visible,
  onClose,
  options,
  style
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={[styles.container, style]}>
              <View style={styles.header}>
                <View style={{ width: 32 }} />
                <Text variant="subtitle" style={styles.headerTitle}>
                  Opciones
                </Text>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Icon name="x" size={24} />
                </TouchableOpacity>
              </View>
              
              <ScrollView style={styles.content}>
                {options.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={styles.option}
                    onPress={() => {
                      option.onPress();
                      onClose();
                    }}
                  >
                    {option.icon && (
                      <Icon 
                        name={option.icon as any} 
                        size={20} 
                        color={option.destructive ? '#FF3B30' : undefined}
                      />
                    )}
                    <Text 
                      variant="body"
                      color={option.destructive ? 'red' : 'primary'}
                      style={styles.optionText}
                    >
                      {option.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
