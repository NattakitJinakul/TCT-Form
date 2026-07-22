import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from 'expo-router';
import { Colors } from '@/src/styles/colors';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: Colors.background,
      },
      headerTitleStyle: {
        fontWeight: '800',
        color: Colors.dark,
      },
      headerShadowVisible: false,
      tabBarStyle: {
        backgroundColor: Colors.white,
        borderTopWidth: 0,
        elevation: 8,
        shadowColor: Colors.dark,
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: -4 },
      },
      tabBarItemStyle: {

      },
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.muted,
      tabBarLabelStyle: {
        fontWeight: '600',
      },
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
      <Tabs.Screen name='CED_Form'
        options={{
          title: 'CED Form',
          tabBarLabel: "CED Form",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
