import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView, Platform} from 'react-native';
import { categories } from '../Data/categoriesData';
import { needData } from '../Data/needData';
import { diseaseData } from '../Data/enfermedadesData';
import { Picker } from '@react-native-picker/picker';
import {styles} from '../Style/HomeScreenStyles';
import {stylesSteps} from '../Style/HomeScreenStyles';
import {reservations} from '../Data/reservationsData';
import { Ionicons } from "@expo/vector-icons";
import {reservationStyle} from '../Style/ReservationStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

// Categorías iniciales de la primera vista




export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectcategories, setSelectCategories] = useState([]);
  const [selectdiseases, setSelectDiseases] = useState([]);
  const [step, setStep] = useState(1);  // Controlar el paso actual
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios' ? true : false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  // funcion para las categories
  const toggleCategory = (category) => {
    if (selectcategories.includes(category)) {
      setSelectCategories(selectcategories.filter((c) => c !== category));
    } else {
      setSelectCategories([...selectcategories, category]);
    }
  };
  // funcion para las enfermedades
  const toggleDisease = (disease) => {
    if (selectdiseases.includes(disease)) {
      setSelectDiseases(selectdiseases.filter((d) => d !== disease));
    } else {
      setSelectDiseases([...selectdiseases, disease]);
    }
  };

  const nextStep = () => {
    if (step < 7) {
      setStep(step + 1);
    }
    if (step === 7) {
      setStep(1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            {/* Paso 1: Selección de servicio */}
            <Text style={stylesSteps.title}>Para poder ofrecerte el mejor servicio, necesitamos que nos proporciones la siguiente información</Text>
            <FlatList
              contentContainerStyle={styles.subContainer}
              data={categories}
              numColumns={3}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const isSelected = selectedCategory === item.id;
                return (
                  // encerramos en un container para que se vea el borde

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
          </>
        );
      case 2:
        return (
          <>
            <View style={styles.subContainer}>


              <ScrollView contentContainerStyle={stylesSteps.needsGrid}>
                {needData.map((item, index) => (
                  <TouchableOpacity key={index} /// metodo para que cambie de color al seleccionar
                    style={[
                      stylesSteps.needButton,
                      selectcategories.includes(item) && stylesSteps.needButtonSelected,
                    ]}
                    onPress={() => toggleCategory(item)}
                  >
                    <Text style={stylesSteps.needButtonText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

            </View>
          </>
        );
      case 3:
        return (
          <>
            {/* Paso 3: Selección de padecimientos */}
            <ScrollView contentContainerStyle={stylesSteps.needsGrid}>

              {diseaseData.map((item, index) => (
                <TouchableOpacity key={index} 
                  style={[
                    stylesSteps.needButton,
                    selectdiseases.includes(item) && stylesSteps.needButtonSelected,
                  ]}
                  onPress={() => toggleDisease(item)}
                >
                  <Text style={stylesSteps.needButtonText}>{item}</Text>
                </TouchableOpacity>

              ))}
            </ScrollView>
          </>
        );
      case 4:
        return (
          <>
            {/* Paso 4: Horario y días */}
            {/* Aquí podrías usar Pickers para la franja horaria, días de la semana, etc. */}
                <Text style={stylesSteps.title}>¿Franja horaria en la que necesitas nuestros servicios?</Text>
            <ScrollView contentContainerStyle={styles.containerTimer}>
            <View style={styles.containerInfo} >
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
                    {/* Agrega más horas según sea necesario */}
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
                    {/* Agrega más horas según sea necesario */}
                  </Picker>
                </View>
              </View>
              </ View> 
              
                <Text style={stylesSteps.titleCategories}>¿Indica los días que necesitas nuestros servicios? </Text>
              <View style={styles.daysContainer}>
                {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day) => (
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
              <Text style={stylesSteps.titleCategories}>¿A partir de qué fecha necesitas el servicio?</Text>
                <View style={styles.containerInfo} >
              <TextInput
                style={styles.input}
                placeholder="DD/MM/AAAA"
                value={startDate}
                onChangeText={setStartDate}
                keyboardType="numeric"
              />  
    
            </View>

            </ScrollView>
          </>
        );
      case 5:
        return (
          <>
            {/* Paso 5: Selección de personal */}
            <Text>Estas son nuestras opciones de personal que más se adecuan a tus necesidades:</Text>
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
              <Text>Fecha de solicitud: <Text style={reservationStyle.bold}>{item.date}</Text></Text>
            </View>
            <View>
              <Ionicons name="star" size={18} color="#FFD700" />
              <Text style={reservationStyle.ratingText}>{item.rating}</Text>
            </View>
          </View>
          )}
        />
    

            {/* Muestra una lista de opciones de enfermeras o personal */}
          </>
        );
      case 6:
        return (
          <>
            {/* Paso 6: Detalles del personal */}
            <Text>Perfil del personal seleccionado:</Text>
            {/* Muestra detalles del personal seleccionado */}
          </>
        );
      case 7:
        return (
          <>
            {/* Paso 7: Pasarela de pago */}
            <Text>Selecciona tu forma de pago:</Text>
            {/* Muestra las opciones de pago */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>
          <Text style={styles.userName}>Hola, María Fernanda</Text>

          <TouchableOpacity style={styles.backButton}>
            <Image source={require('../../assets/arrow.png')} style={styles.backIcon} />
          </TouchableOpacity>

        </Text>

      </View>
      <View style={stylesSteps.stepIndicator}>
        <View style={stylesSteps.stepCircle}>
          <Text style={stylesSteps.stepNumber}>
            {step}
          </Text>
        </View>
        <Text style={stylesSteps.titleCategories}>
          {step === 1 && 'Selecciona el tipo de servicio que solicitas'}
          {step === 2 && 'Selecciona las necesidades que tiene el paciente en el día a día'}
          {step === 3 && '¿Qué padecimientos tiene tu paciente?'}
          {step === 4 && 'Indica el horario y los días que necesitas el servicio'}
          {step === 5 && 'Estas son nuestras opciones de personal que más se adecuan a tus necesidades'}
        </Text>
      </View>
      {/* Contenido dinámico según el paso */}
      {renderStepContent()}

      {/* Botón siguiente */}
      <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
        <Text style={styles.nextButtonText}>SIGUIENTE</Text>
      </TouchableOpacity>
    </View>
  );
}
