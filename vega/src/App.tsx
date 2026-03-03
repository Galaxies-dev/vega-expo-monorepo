import {
  enableFreeze,
  enableScreens,
} from '@amazon-devices/react-native-screens';
import { createStackNavigator } from '@amazon-devices/react-navigation__stack';
import { NavigationContainer } from '@amazon-devices/react-navigation__native';
import type { RootStackParamList } from './navigation/types';
import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import { AboutScreen } from './screens/AboutScreen';

enableScreens();
enableFreeze();

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
