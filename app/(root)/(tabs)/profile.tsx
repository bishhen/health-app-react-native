import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  // Sample user data
  const userData = {
    name: "Bishana",
    email: "bishana@gmail.com",
    address: "Piliyandala,Srilanka",
    age: "25",
    gender: "Female",
    telephone: "071 0996826",
  };

  const handleUpdate = () => {
    // Action for update button
    alert("Update button clicked!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Cover Photo */}
        <View style={styles.coverPhotoContainer}>
          <Image
            source={require("../../../assets/images/pic6.png")}
            style={styles.coverPhoto}
          />
          {/* Profile Picture */}
          <View style={styles.profilePictureContainer}>
            <Image
              source={require("../../../assets/images/profile.png")}
              style={styles.profilePicture}
            />
          </View>
        </View>
        {/* Name under Profile */}
        <Text style={styles.profileName}>{userData.name}</Text>
        {/* User Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={userData.email}
            editable={false}
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={userData.address}
            editable={false}
          />

          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={userData.age}
            editable={false}
          />

          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            value={userData.gender}
            editable={false}
          />

          <Text style={styles.label}>Telephone</Text>
          <TextInput
            style={styles.input}
            value={userData.telephone}
            editable={false}
          />
        </View>
        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8BFD8",
    alignItems: "center",
    padding: 20,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  coverPhotoContainer: {
    width: "100%",
    height: 200,
    position: "relative",
    borderBottomColor: "black", // Yellow color
    borderBottomWidth: 5, // Thickness of the border
  },
  coverPhoto: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profilePictureContainer: {
    position: "absolute",
    bottom: -75, // Adjust to position the profile picture over the cover photo
    left: "50%",
    transform: [{ translateX: -75 }], // Centers the profile picture
    alignItems: "center",
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "black", // Yellow color
  },
  profileName: {
    marginTop: 90, // Adjusted to give spacing below the profile picture
    fontSize: 20,
    fontWeight: "bold",
    color: "#8569bb", // Yellow color
    textAlign: "center",
  },
  detailsContainer: {
    marginTop: 30,
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "black", // Ash color
    marginBottom: 5,
  },
  input: {
    backgroundColor: "gray",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#B0BEC5", // Ash color
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  updateButton: {
    marginTop: 20,
    backgroundColor: "#8569bb", // Yellow color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  updateButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white", // Dark background color for contrast
    textAlign: "center",
  },
});

export default Profile;
