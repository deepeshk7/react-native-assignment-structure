import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NotificationsScreen } from './src/screens/NotificationsScreen';
import { RootStackParamList } from './src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Notifications"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;