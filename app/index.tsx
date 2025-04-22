import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { data } from '../data';
import { Category } from '../types/category';

export default function Home() {
  const router = useRouter();

  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity onPress={() => router.push(`/category/${item.id}`)}>
      <Image source={{ uri: item.cover }} style={{ height: 200, marginBottom: 10 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data.categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}
