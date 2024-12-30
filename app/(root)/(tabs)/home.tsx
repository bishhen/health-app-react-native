import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert, StyleSheet, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";  // To access the route parameters

export default function Home() {
  const route = useRoute();
  const { username } = route.params;  // Access the passed username from the login page

  const [articles, setArticles] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=health&apiKey=1adbb745e17c42d6ad17cb7d286f681f`
      );
      const data = await response.json();
      setArticles(data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
      Alert.alert("Error", "Failed to load articles. Please try again later.");
      setLoading(false);
    }
  };

  const handleArticleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.articleCard}>
        {item.urlToImage ? (
          <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />
        ) : (
          <View style={styles.placeholderImage}></View>
        )}
        <View style={styles.articleInfo}>
          <Text style={styles.articleTitle}>{item.title}</Text>
          <Text style={styles.articleDescription} numberOfLines={2}>
            {item.description}
          </Text>
          <TouchableOpacity
            onPress={handleArticleClick}
            style={styles.readMoreButton}
          >
            <Text style={styles.buttonText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with username */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>
          Welcome, {username ? username : "Guest"} 👋
        </Text>
      </View>

      {/* Articles loading or list */}
      {loading ? (
        <Text>Loading articles...</Text>
      ) : (
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      {/* Floating button showing click count */}
      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>Clicks: {clickCount}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with transparency for the overall background
  },
  header: {
    backgroundColor: "#D8BFD8", // Lavender color
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    opacity: 0.8, // Apply transparency to the header
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  articleCard: {
    backgroundColor: "#D8BFD8", // Cards with light lavender color
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  articleImage: {
    width: "100%",
    height: 150,
  },
  placeholderImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
  },
  articleInfo: {
    paddingTop: 10,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  articleDescription: {
    fontSize: 14,
    color: "#777",
    marginTop: 10,
  },
  readMoreButton: {
    backgroundColor: "#8569bb", // Read More button with purple color
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#8569bb", // Clicks button with purple color
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  floatingButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
