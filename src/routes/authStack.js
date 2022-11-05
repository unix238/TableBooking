import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { WelcomeScreen } from '../screens/Auth/WelcomeScreen';
import { Login } from '../screens/Auth/Login';
import { Register } from '../screens/Auth/Register';

const loginStack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <loginStack.Navigator initialRouteName='WelcomeScreen'>
        <loginStack.Screen
          name='WelcomeScreen'
          component={WelcomeScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
            animation: 'none',
          }}
        />
        <loginStack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
            animationEnabled: false,
            animation: 'none',
          }}
        />
        <loginStack.Screen
          name='Register'
          component={Register}
          options={{
            headerShown: false,
            animationEnabled: false,
            animation: 'none',
          }}
        />
      </loginStack.Navigator>
    </NavigationContainer>
  );
}
