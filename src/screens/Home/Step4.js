import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "../../Style/HomeScreenStyles";
import { stylesSteps } from "../../Style/HomeScreenStyles";
import { Picker } from "@react-native-picker/picker";

const Step4 = ({ startTime, endTime, setStartTime, setEndTime, selectedDays, setSelectedDays, date, setStartDate, setDate, formData, setFormData}) => {
  const [isValid, setIsValid] = useState(true); // Para manejar la validez de la fecha


  const handleDateChange = (text) => {
    console.log("Texto ingresado:", text); // Para depurar
  
    let cleaned = text.replace(/\D/g, ""); // Eliminar caracteres no numéricos
    console.log("Solo números:", cleaned);
  
    let formattedText = ""; // Mover la variable dentro de la función para evitar acumulación incorrecta
  
    if (cleaned.length > 0) formattedText += cleaned.substring(0, 2);
    if (cleaned.length > 2) formattedText += "/" + cleaned.substring(2, 4);
    if (cleaned.length > 4) formattedText += "/" + cleaned.substring(4, 8);
  
    console.log("Texto formateado:", formattedText);
  
    setStartDate(formattedText);
    // actualizar el estado de la fecha
    setDate(formattedText);

    // formattedtext es la fecha que se va a guardar
    
  };

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
    setFormData({
      ...formData,
      selectedDays: selectedDays,
    });
  };

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text style={stylesSteps.title}>
          ¿Franja horaria en la que necesitas nuestros servicios?
        </Text>
        <View style={styles.containerInfo}>
          <View style={styles.timeContainer}>
            <Text style={styles.titletimerDE}>De</Text>
            <View style={styles.timeInput}>
              <Picker
                style={styles.timeInput}
                selectedValue={startTime}
                onValueChange={(itemValue) => setStartTime(itemValue)}
                mode="dropdown"
              >
                {[...Array(24).keys()].map((i) => {
                  const hourString = i.toString().padStart(2, "0"); // Asegurar formato "00", "01", ..., "23"
                  return [
                    <Picker.Item key={`${hourString}:00`} label={`${hourString}:00`} value={`${hourString}:00`} />,
                    <Picker.Item key={`${hourString}:30`} label={`${hourString}:30`} value={`${hourString}:30`} />
                  ];
                })}
              </Picker>
            </View>

            <Text style={styles.titletimerDE}>Hasta</Text>
            <View style={styles.timeInput}>
              <Picker
                style={styles.timeInput}
                selectedValue={endTime}
                onValueChange={(itemValue) => setEndTime(itemValue)}
                mode="dropdown"
              >
                {[...Array(24).keys()].map((i) => {
                  const hourString = i.toString().padStart(2, "0"); // Asegurar formato "00", "01", ..., "23"
                  return [
                    <Picker.Item key={`${hourString}:00`} label={`${hourString}:00`} value={`${hourString}:00`} />,
                    <Picker.Item key={`${hourString}:30`} label={`${hourString}:30`} value={`${hourString}:30`} />
                  ];
                })}
              </Picker>
            </View>
          </View>
        </View>

        <Text style={stylesSteps.titleCategories}>
          ¿Indica los días que necesitas nuestros servicios?
        </Text>
        <View style={styles.daysContainer}>
          {["L", "M", "X", "J", "V", "S", "D"].map((day) => (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayButton,
                selectedDays.includes(day) && styles.dayButtonSelected,
              ]}
              onPress={() => toggleDay(day)}
            >
              <Text style={styles.dayText}>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={stylesSteps.titleCategories}>
          ¿A partir de qué fecha necesitas el servicio?
        </Text>
        <View style={styles.containerInfo}>
          <TextInput
            style={[styles.input, !isValid && styles.invalidInput]}  // Cambiar color si es inválido
            placeholder="DD/MM/AAAA"
            value={date}
            onChangeText={handleDateChange}
          />
          {!isValid && <Text style={styles.errorText}>Formato de fecha inválido</Text>}
        </View>
      </ScrollView>
    </>
  );
};

export default Step4;
