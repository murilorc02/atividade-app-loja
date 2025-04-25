import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { ComponentProps } from 'react';

export default function Layout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: '#8E8E93',
    }}>
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Categorias',
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="th-list" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="category" 
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="shopping-bag" size={24} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}