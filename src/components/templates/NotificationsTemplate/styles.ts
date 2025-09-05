import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../../utils/colors';

interface Styles {
  container: ViewStyle;
  selectionHeader: ViewStyle;
  selectionActions: ViewStyle;
  successBanner: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  selectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  selectionActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  successBanner: {
    backgroundColor: colors.green,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
});
