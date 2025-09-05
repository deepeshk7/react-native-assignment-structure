import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../../utils/colors';

interface Styles {
  container: ViewStyle;
  checked: ViewStyle;
  unchecked: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  checked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  unchecked: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
});