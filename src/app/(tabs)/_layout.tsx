import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: true,
      tabBarStyle: {

      },
      tabBarItemStyle: {

      },
      // tabBarActiveTintColor: '#FA8',
      // tabBarInactiveTintColor: '#888',
    }}
    >
      <Tabs.Screen name='index'
        options={{
          title: 'Counter',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='infinite' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name='Arith'
        options={{
          title: 'Arith',
          tabBarLabel: "Arith",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calculator' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name='Form'
        options={{
          title: 'From',
          tabBarLabel: "From",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
