import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const reservations = [
  {
    id: "1",
    name: "María López Ramírez",
    role: "Auxiliar de enfermería",
    experience: "5 años",
    date: "12/05/2024",
    rating: 4.8,
    // image: require("../../assets/nurse1.png"),
  },
  {
    id: "2",
    name: "María López Ramírez",
    role: "Auxiliar de enfermería",
    experience: "5 años",
    date: "12/05/2024",
    rating: 4.8,
    // image: require("../../assets/nurse2.png"),
  },
  {
    id: "3",
    name: "María López Ramírez",
    role: "Auxiliar de enfermería",
    experience: "5 años",
    date: "12/05/2024",
    rating: 4.8,
    // image: require("../../assets/nurse3.png"),
  },
];

export default function ReservationsScreen() {
  return (
    <View style={styles.container}>
      {/* Logo y bienvenida */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.welcomeText}>Hola, <Text style={styles.name}>María Fernanda</Text></Text>
        <Ionicons name="arrow-back" size={24} color="#0096FF" style={styles.backIcon} />
      </View>

      {/* Historial de solicitudes */}
      <Text style={styles.sectionTitle}>Historial de solicitudes</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.cardContent}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.roleText}>{item.role}</Text>
              <Text style={styles.experienceText}>Experiencia: <Text style={styles.highlight}>{item.experience}</Text></Text>
              <Text style={styles.dateText}>Fecha de solicitud: <Text style={styles.bold}>{item.date}</Text></Text>
            </View>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={18} color="#FFD700" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
          </View>
        )}
      />

      {/* Botón para solicitar otro servicio */}
      <TouchableOpacity style={styles.requestButton}>
        <Text style={styles.requestButtonText}>SOLICITAR OTRO SERVICIO</Text>
      </TouchableOpacity>

      {/* Barra de navegación inferior */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 18,
    color: "#333",
    marginTop: 10,
  },
  name: {
    color: "#0096FF",
    fontWeight: "bold",
  },
  backIcon: {
    position: "absolute",
    left: 20,
    top: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    elevation: 3,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  roleText: {
    color: "#666",
  },
  experienceText: {
    color: "#666",
  },
  highlight: {
    color: "#0096FF",
    fontWeight: "bold",
  },
  dateText: {
    color: "#666",
  },
  bold: {
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
    fontWeight: "bold",
  },
  requestButton: {
    backgroundColor: "#0096FF",
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  requestButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "black",
  },
});
