import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {icons, COLORS} from '../constants';
import {View, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.black,
          height: '10%',
          justifyContent: 'center',
          borderTopWidth: 0,
          shadowColor: COLORS.black
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          showIcon: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.white : COLORS.gray,
                  }}
                />
              </View>
            );
          },
        }}
      />

      {/* search screen */}
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          showIcon: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.white : COLORS.gray,
                  }}
                />
              </View>
            );
          },
        }}
      />

      {/* notification screen */}
      <Tab.Screen
        name="Notification"
        component={HomeScreen}
        options={{
          showIcon: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.white : COLORS.gray,
                  }}
                />
              </View>
            );
          },
        }}
      />

      {/* menu screen */}
      <Tab.Screen
        name="Menu"
        component={HomeScreen}
        options={{
          showIcon: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.white : COLORS.gray,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
