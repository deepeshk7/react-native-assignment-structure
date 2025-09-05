import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../../utils/colors';

interface Styles {
  container: ViewStyle;
  selected: ViewStyle;
  content: ViewStyle;
  leftSection: ViewStyle;
  centerSection: ViewStyle;
  rightSection: ViewStyle;
  textContainer: ViewStyle;
  title: ViewStyle;
  description: ViewStyle;
  timestamp: ViewStyle;
  redDot: ViewStyle;
  checkboxContainer: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  selected: {
    backgroundColor: '#F0F8FF',
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
  },
  leftSection: {
    marginRight: 12,
  },
  centerSection: {
    flex: 1,
    marginRight: 12,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 4,
  },
  description: {
    marginBottom: 8,
  },
  timestamp: {
    marginTop: 4,
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.red,
    marginRight: 8,
    marginTop: 6,
  },
  checkboxContainer: {
    marginRight: 12,
    marginTop: 4,
  },
});