import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "../../Style/HomeScreenStyles";
import { stylesSteps } from "../../Style/HomeScreenStyles";
import { Picker } from "@react-native-picker/picker";

const Step4 = ({ startTime, setStartTime, endTime, setEndTime, selectedDays, setSelectedDays    , date, setStartDate }) => {
  const [isValid, setIsValid] = useState(true); // Para manejar la validez de la fecha

  // Validar el formato DD/MM/AAAA
  // Validar el formato DD/MM/AAAA
  const handleDateChange = (text) => {
    // Solo permitir números y '/'
    let formattedText = text.replace(/[^0-9/]/g, '');

    // Insertar '/' automáticamente cuando sea necesario
    if (formattedText.length > 2 && formattedText[2] !== '/') {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`;
    }
    if (formattedText.length > 5 && formattedText[5] !== '/') {
      formattedText = `${formattedText.slice(0, 5)}/${formattedText.slice(5)}`;
    }

    // Validar el formato DD/MM/YYYY
    const dateParts = formattedText.split('/');
    const isDateValid =
      dateParts.length === 3 &&
      dateParts[0].length === 2 &&
      dateParts[1].length === 2 &&
      dateParts[2].length === 4;

    setStartDate(formattedText); // Establecer la fecha con formato
    setIsValid(isDateValid); // Establecer si la fecha es válida
  };

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
    // setFormData({
    //   ...formData,
    //   selectedDays: selectedDays,
    // });
  };

  return (
    <>
      {/* Paso 4: Horario y días */}
      <Text style={stylesSteps.title}>
        ¿Franja horaria en la que necesitas nuestros servicios?
      </Text>

      <ScrollView contentContainerStyle={styles.containerTimer}>
        <View style={styles.containerInfo}>
          <View style={styles.timeContainer}>
            <Text style={styles.titletimerDE}>De</Text>
            <View style={styles.timeInput}>
              <Picker
                selectedValue={startTime}
                onValueChange={(itemValue) => setStartTime(itemValue)}
                mode="dropdown"
              >
                {[...Array(24).keys()].map((i) => (
                  <React.Fragment key={i}>
                    <Picker.Item label={`${i}:00`} value={`${i}:00`} />
                    <Picker.Item label={`${i}:30`} value={`${i}:30`} />
                  </React.Fragment>
                ))}
              </Picker>
            </View>

            <Text style={styles.titletimerDE}>Hasta</Text>
            <View style={styles.timeInput}>
              <Picker
                selectedValue={endTime}
                onValueChange={(itemValue) => setEndTime(itemValue)}
                mode="dropdown"
              >
                {[...Array(24).keys()].map((i) => (
                  <React.Fragment key={i}>
                    <Picker.Item label={`${i}:00`} value={`${i}:00`} />
                    <Picker.Item label={`${i}:30`} value={`${i}:30`} />
                  </React.Fragment>
                ))}
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
            keyboardType="numeric"
            maxLength={10} // Limitar a 10 caracteres (DD/MM/AAAA)
          />
          {!isValid && <Text style={styles.errorText}>Formato de fecha inválido</Text>}
        </View>
      </ScrollView>
    </>
  );
};

export default Step4;
