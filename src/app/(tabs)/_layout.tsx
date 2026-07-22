import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#f0f9ff',
      },
      headerTitleStyle: {
        fontWeight: '800',
        color: '#0c4a6e',
      },
      headerShadowVisible: false,
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 0,
        elevation: 8,
        shadowColor: '#0c4a6e',
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: -4 },
      },
      tabBarItemStyle: {

      },
      tabBarActiveTintColor: '#0ea5e9',
      tabBarInactiveTintColor: '#7ca6c0',
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
