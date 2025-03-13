
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, ImageBackground  } from "react-native";
import React, { useState } from "react";

const categories = [
  { id: "1", name: "ENFERMERA", icon: require("../../assets/enfermera.png") },
  { id: "2", name: "AUXILIAR", icon: require("../../assets/auxiliar.png") },
  { id: "3", name: "NIÑERA", icon: require("../../assets/ninera.png") },
  { id: "4", name: "CUIDADO HOSPITALARIO", icon: require("../../assets/cuidado.png") },
  { id: "5", name: "CUIDADORA", icon: require("../../assets/cuidadora.png") },
  { id: "6", name: "POR HORAS", icon: require("../../assets/horas.png") },
  { id: "7", name: "FISIOTERAPIA", icon: require("../../assets/fisioterapia.png") },
  { id: "8", name: "MASAJES", icon: require("../../assets/masajes.png") },
  { id: "9", name: "PSICOTERAPIA", icon: require("../../assets/piso.png") },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.welcomeText}>Hola, <Text style={styles.userName}>María Fernanda</Text></Text>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require("../../assets/arrow.png")} style={styles.backIcon} />
        </TouchableOpacity> 
      </View>
      

      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Busco..." style={styles.searchInput} />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require("../../assets/filter.png")} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      {/* Categorías */}
      <View style={styles.container}>
      <FlatList
        data={categories}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSelected = selectedCategory === item.id;

          return (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                isSelected && styles.categoryButtonSelected,
              ]}
              onPress={() => setSelectedCategory(item.id)}
            >
              <Image source={item.icon} style={styles.categoryIcon} />
              <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>

      {/* Botón siguiente */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>SIGUIENTE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 320,
    height: 56,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 16,
    color: "#333",
  },
  userName: {
    fontWeight: "bold",
    color: "#007AFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 28,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  filterButton: {
    padding: 5,
  },
  filterIcon: {
    width: 56,
    height: 56,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: "#E8E8E8",
    padding: 15,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 2,
  },
  categoryButtonSelected: {
    backgroundColor: "#0096FF", // Azul cuando está seleccionado
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
