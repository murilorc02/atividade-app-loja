import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { data } from '../../data';

export default function CategoryPage() {
  const { id } = useLocalSearchParams();
  const categoryId = Number(id);

  const products = data.products.filter(p => p.idCategory === categoryId);
  const category = data.categories.find(c => c.id === categoryId);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{category?.title}</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    gap: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  price: {
    marginTop: 4,
    color: '#008000'
  }
});
