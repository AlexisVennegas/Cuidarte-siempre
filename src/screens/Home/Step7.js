import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';


// recibimos los props de la pantalla anterior de      // le pasamos por props los days
        //  selectedDays={selectedDays}
         // setSelectedDays={setSelectedDays}

const Step7 = ({ selectedDays, setSelectedDays, startDate, setStartDate, startTime, endTime })=> {   


    const days = ["L", "M", "X", "J", "V", "S", "D"];
  
    //const [startTime, setStartTime] = useState('0:00');
    //const [endTime, setEndTime] = useState('0:00');

    const [phone, setPhone] = useState("");
    return (
        <>
            {/* Paso 7: Pasarela de pago */}
            <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
                {/* Header */}




                {/* Perfil */}
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }}>
                    <Image
                        source={require('../../../assets/enfermera_image.png')} // Cambia la ruta de la imagen según tu estructura de carpetas
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

                {/* Días seleccionados */}
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>Los días seleccionados son:</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
                    {days.map((day) => (
                        <TouchableOpacity
                            key={day}
                            style={{
                                backgroundColor: selectedDays.includes(day) ? "#BFE3FF" : "#F0F0F0",
                                padding: 10,
                                margin: 5,
                                borderRadius: 10,
                                width: 40,
                                alignItems: "center",
                            }}
                            onPress={() => {
                                setSelectedDays((prev) =>
                                    prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
                                );
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>{day}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

 
                                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>Horario seleccionado</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
                                    <TextInput
                                        style={{
                                            backgroundColor: "#F0F0F0",
                                            padding: 10,
                                            borderRadius: 10,
                                            width: "45%",
                                            textAlign: "center",
                                            fontSize: 16,
                                        }}
                                        value={startTime}
                                        onChangeText={setStartDate}
                                        editable={true}
                                    />
                                    <TextInput
                                        style={{
                                            backgroundColor: "#F0F0F0",
                                            padding: 10,
                                            borderRadius: 10,
                                            width: "45%",
                                            textAlign: "center",
                                            fontSize: 16,
                                        }}
                                        value={endTime}
                                        editable={false}
                                    />
                                </View>

                                {/* Fecha */}
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>A partir de:</Text>
                <TextInput
                    style={{
                        backgroundColor: "#F0F0F0",
                        padding: 10,
                        borderRadius: 10,
                        marginBottom: 10,
                        fontSize: 16,
                        textAlign: "center",
                    }}
                    value={startDate}
                    editable={false}

                />

                {/* Teléfono */}
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>Ingresa tu teléfono</Text>
                <TextInput
                    style={{
                        backgroundColor: "#F0F0F0",
                        padding: 10,
                        borderRadius: 10,
                        fontSize: 16,
                        marginBottom: 20,
                    }}
                    placeholder="+52 0000000000"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />

                {/* Método de pago */}

            </ScrollView>
        </>
    )
}
export default Step7;
