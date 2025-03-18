import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,   ScrollView} from 'react-native';

const step6 = () => {
    return (
        <>
        {/* Paso 6: Detalles del personal */}
        <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
  {/* Header */}
  {/* <Text style={{ fontSize: 12, color: "#666", marginBottom: 5 }}>CANDIDATE DETAIL</Text> */}
 

  {/* Saludo */}
  {/* <Text style={{ fontSize: 16, color: "#333" }}>
    Hola, <Text style={{ color: "#007BFF" }}>María Fernanda</Text>
  </Text>
  <Text style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>
    Estás viendo el CV de:
  </Text> */}

  {/* Perfil */}
  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
    <Image source={require('../../../assets/enfermera_image.png')} // Cambia la ruta de la imagen según tu estructura de carpetas 
      style={{ width: 60, height: 60, marginRight: 10 }}
    />
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>María López Ramírez</Text>
      <Text style={{ fontSize: 14, color: "#666" }}>Auxiliar de enfermería</Text>
      <Text style={{ fontSize: 14, color: "#666" }}>
        Experiencia: <Text style={{ color: "#007BFF" }}>5 años</Text>
      </Text>
    </View>
  </View>

  {/* Descripción */}
  <Text style={{ fontSize: 14, color: "#333", marginBottom: 10 }}>
    Experiencia en el cuidado de pacientes a domicilio. Especialista en asistencia a personas mayores, manejo de medicación, curaciones y control de signos vitales. Empática, responsable y con vocación de servicio.
  </Text>

  {/* Experiencia Laboral */}
  <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>Experiencia Laboral</Text>
  <Text style={{ fontSize: 14, fontWeight: "bold" }}>Enfermera a Domicilio | [Nombre de Empresa]</Text>
  <Text style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>2020 - Presente</Text>
  <Text style={{ fontSize: 14, color: "#333" }}>• Atención integral a pacientes con movilidad reducida.</Text>
  <Text style={{ fontSize: 14, color: "#333" }}>• Administración de medicamentos y terapias.</Text>
  <Text style={{ fontSize: 14, color: "#333", marginBottom: 10 }}>• Monitoreo de signos vitales y seguimiento médico.</Text>

  {/* Formación */}
  <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>Formación</Text>
  <Text style={{ fontSize: 14, fontWeight: "bold" }}>Licenciatura en Enfermería | [Universidad]</Text>
  <Text style={{ fontSize: 14, color: "#666", marginBottom: 10 }}>[Año]</Text>

  {/* Botón de acción */}
  {/* <TouchableOpacity 
    style={{
      backgroundColor: "#007BFF",
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: "center"
    }}
  >
    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
      SOLICITAR SERVICIO
    </Text>
  </TouchableOpacity> */}
</ScrollView>
        {/* Muestra detalles del personal seleccionado */}
      </>


    )
}

export default step6