import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons} from '@expo/vector-icons';
import 'react-native-gesture-handler';

import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';
import Detalle from './Screens/Detalle';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileNuevo(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detalle" component={Detalle} options={{ title: 'Detalles de Usuario'}}/>
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil de Usuario' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileNuevo} />
      <Tab.Screen name="Settings" component={Settings} />

    </Tab.Navigator>
    </NavigationContainer>
    
  );
}
