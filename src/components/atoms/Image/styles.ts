import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  image: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});