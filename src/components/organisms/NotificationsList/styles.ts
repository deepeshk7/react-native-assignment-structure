import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  list: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});