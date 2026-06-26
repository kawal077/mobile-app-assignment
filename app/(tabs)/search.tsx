import { View, Text, StyleSheet, TextInput, Image, FlatList } from "react-native";

const images = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400",
];

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.search} placeholder="Search" />

      <FlatList
        data={images}
        numColumns={3}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 50 },
  search: {
    backgroundColor: "#eee",
    margin: 12,
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
  },
  image: {
    width: "33.33%",
    height: 130,
    borderWidth: 1,
    borderColor: "#fff",
  },
});