import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../../utils/colors';

interface Styles {
  base: ViewStyle;
  primary: ViewStyle;
  secondary: ViewStyle;
  danger: ViewStyle;
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
  disabled: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  base: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 32,
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  },
  large: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    minHeight: 52,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    textAlign: 'center',
  },
});