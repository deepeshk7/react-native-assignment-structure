import { StyleSheet, ViewStyle, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { height: screenHeight } = Dimensions.get('window');

interface Styles {
  overlay: ViewStyle;
  container: ViewStyle;
  header: ViewStyle;
  headerTitle: ViewStyle;
  closeButton: ViewStyle;
  content: ViewStyle;
  option: ViewStyle;
  optionText: ViewStyle;
  destructive: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: screenHeight * 0.7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
  },
  closeButton: {
    padding: 8,
  },
  content: {
    paddingBottom: 32,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  optionText: {
    marginLeft: 12,
  },
  destructive: {
    color: colors.red,
  },
});
