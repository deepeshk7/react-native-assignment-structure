import { ViewStyle } from 'react-native';

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}
