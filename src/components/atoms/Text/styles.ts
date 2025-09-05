import { StyleSheet, TextStyle } from 'react-native';
import { colors } from '../../../utils/colors';

interface Styles {
  base: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
  body: TextStyle;
  caption: TextStyle;
  color_primary: TextStyle;
  color_secondary: TextStyle;
  color_tertiary: TextStyle;
  color_white: TextStyle;
  color_red: TextStyle;
  color_green: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  base: {
    fontFamily: 'System',
  },
  // Variants
  title: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  // Colors
  color_primary: {
    color: colors.text.primary,
  },
  color_secondary: {
    color: colors.text.secondary,
  },
  color_tertiary: {
    color: colors.text.tertiary,
  },
  color_white: {
    color: '#FFFFFF',
  },
  color_red: {
    color: colors.red,
  },
  color_green: {
    color: colors.green,
  },
});