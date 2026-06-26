import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const posts = [
  {
    id: "1",
    user: "ootd_everyday",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
    likes: "2,431",
    caption: "Daily outfit inspiration ✨",
  },
  {
    id: "2",
    user: "fashion_daily",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    likes: "1,204",
    caption: "Street style look today.",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.icons}>
          <Ionicons name="heart-outline" size={25} />
          <Ionicons name="paper-plane-outline" size={25} />
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.avatar} />
              <Text style={styles.username}>{item.user}</Text>
            </View>

            <Link href={`/post/${item.id}`} asChild>
              <TouchableOpacity>
                <Image source={{ uri: item.image }} style={styles.postImage} />
              </TouchableOpacity>
            </Link>

            <View style={styles.actions}>
              <Ionicons name="heart-outline" size={26} />
              <Ionicons name="chatbubble-outline" size={26} />
              <Ionicons name="paper-plane-outline" size={26} />
            </View>

            <Text style={styles.likes}>{item.likes} likes</Text>
            <Text style={styles.caption}>
              <Text style={styles.username}>{item.user} </Text>
              {item.caption}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 50 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  logo: { fontSize: 28, fontWeight: "bold" },
  icons: { flexDirection: "row", gap: 15 },
  post: { marginBottom: 25 },
  postHeader: { flexDirection: "row", alignItems: "center", padding: 12 },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e75480",
    marginRight: 10,
  },
  username: { fontWeight: "bold" },
  postImage: { width: "100%", height: 390 },
  actions: { flexDirection: "row", gap: 14, padding: 12 },
  likes: { fontWeight: "bold", paddingHorizontal: 12 },
  caption: { paddingHorizontal: 12, paddingTop: 5 },
});
