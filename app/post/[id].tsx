import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const postData: Record<string, any> = {
  "1": {
    user: "ootd_everyday",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500",
    caption: "Daily outfit inspiration ✨",
  },
  "2": {
    user: "fashion_daily",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    caption: "Street style look today.",
  },
};

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();
  const post = postData[String(id)] || postData["1"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} />
        </TouchableOpacity>
        <Text style={styles.title}>Post</Text>
      </View>

      <View style={styles.userRow}>
        <View style={styles.avatar} />
        <Text style={styles.username}>{post.user}</Text>
      </View>

      <Image source={{ uri: post.image }} style={styles.image} />

      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={28} />
        <Ionicons name="chatbubble-outline" size={28} />
        <Ionicons name="paper-plane-outline" size={28} />
      </View>

      <Text style={styles.caption}>
        <Text style={styles.username}>{post.user} </Text>
        {post.caption}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 50 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  userRow: { flexDirection: "row", alignItems: "center", padding: 15 },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#e75480",
    marginRight: 10,
  },
  username: { fontWeight: "bold" },
  image: { width: "100%", height: 430 },
  actions: { flexDirection: "row", gap: 15, padding: 15 },
  caption: { paddingHorizontal: 15, fontSize: 15 },
});
