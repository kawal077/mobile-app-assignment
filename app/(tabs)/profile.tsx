import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";

const posts = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ootd_everyday</Text>

      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>OOTD</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.number}>53</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.number}>12K</Text>
          <Text>Followers</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.number}>221</Text>
          <Text>Following</Text>
        </View>
      </View>

      <View style={styles.bio}>
        <Text style={styles.name}>OOTD Everyday</Text>
        <Text>Fit check!</Text>
        <Text>Daily fashion inspiration.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        numColumns={3}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.gridImage} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 50 },
  header: { fontSize: 22, fontWeight: "bold", paddingHorizontal: 15 },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#2c9bd6",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: { color: "#fff", fontWeight: "bold" },
  stat: { flex: 1, alignItems: "center" },
  number: { fontWeight: "bold", fontSize: 17 },
  bio: { paddingHorizontal: 15 },
  name: { fontWeight: "bold" },
  button: {
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { fontWeight: "bold" },
  gridImage: {
    width: "33.33%",
    height: 130,
    borderWidth: 1,
    borderColor: "#fff",
  },
});