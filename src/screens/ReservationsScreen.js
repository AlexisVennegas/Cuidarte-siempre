import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { reservations } from "../Data/reservationsData";
import {reservationStyle} from '../Style/ReservationStyles';

export default function ReservationsScreen() {
  return (
    <View style={reservationStyle.container}>
      {/* Logo y bienvenida */}
      <View style={reservationStyle.header}>
        <Image source={require("../../assets/logo.png")} style={reservationStyle.logo} />
        <Text style={reservationStyle.welcomeText}>Hola, <Text style={reservationStyle.name}>María Fernanda</Text></Text>
        <Ionicons name="arrow-back" size={24} color="#0096FF" style={reservationStyle.backIcon} />
      </View>

      {/* Historial de solicitudes */}
      <Text style={reservationStyle.sectionTitle}>Historial de solicitudes</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={reservationStyle.card}>
            <Image source={item.image} style={reservationStyle.profileImage} />
            <View style={reservationStyle.cardContent}>
              <Text style={reservationStyle.nameText}>{item.name}</Text>
              <Text style={reservationStyle.roleText}>{item.role}</Text>
              <Text style={reservationStyle.experienceText}>Experiencia: <Text style={reservationStyle.highlight}>{item.experience}</Text></Text>
              <Text style={reservationStyle.dateText}>Fecha de solicitud: <Text style={reservationStyle.bold}>{item.date}</Text></Text>
            </View>
            <View style={reservationStyle.ratingContainer}>
              <Ionicons name="star" size={18} color="#FFD700" />
              <Text style={reservationStyle.ratingText}>{item.rating}</Text>
            </View>
          </View>
        )}
      />

      {/* Botón para solicitar otro servicio */}
      <TouchableOpacity style={reservationStyle.requestButton}>
        <Text style={reservationStyle.requestButtonText}>SOLICITAR OTRO SERVICIO</Text>
      </TouchableOpacity>

      {/* Barra de navegación inferior */}
     
    </View>
  );
}

