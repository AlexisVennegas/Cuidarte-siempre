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
import Step9 from './Home/Step9';
import Step8 from './Home/Step8';
import Step7 from './Home/Step7';
import Step6 from './Home/Step6';
import Step5 from './Home/Step5';
// Categorías iniciales de la primera vista




export default function HomeScreen() {
    // marca las categorias seleccionadas
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectcategories, setSelectCategories] = useState([]);
  const [selectdiseases, setSelectDiseases] = useState([]);
  const [step, setStep] = useState(1);  // Controlar el paso actual
  const [startTime, setStartTime] = useState('0:00');
  const [endTime, setEndTime] = useState('0:00');
  const [selectedDays, setSelectedDays] = useState([]);
  // marca la hora de inicio y fin

  // marca la fecha de inicio
  const [startDate, setStartDate] = useState('');
  // marca la fecha de fin
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);



// marca la fecha de inicio





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
    if (step < 10) {
      setStep(step + 1);
    }
    if (step === 10 ) {
      setStep(1);
    }
  };
  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
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
      case 5:  return <Step5 step={step} setStep={setStep} />; // Pasamos setStep como prop
      case 6:  return (<Step6 />);
      case 7:  return (<Step7 />);
      case 8:  return (<Step8 />);
      case 9:  return (<Step9 />);
      default: return null;
    }
  };

  return (
    // header
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>
          <Text style={styles.userName}>Hola, María Fernanda</Text>

          <TouchableOpacity style={styles.backButton}  onPress={previousStep}>
            <Image source={require('../../assets/arrow.png')} style={styles.backIcon}
            // funcion press que regresa al paso anterior
           
         
            />
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
          {step === 6 && 'Detalles del personal'}
          {step === 7 && 'Detalles de la solicitud'}
          {step === 8 && 'Selecciona el método de pago'}
          {step === 9 && 'Selecciona el método de pago'}
          

        </Text>
      </View>
      {/* Contenido dinámico según el paso */}
      {renderStepContent()}

      {/* Botón siguiente */}
      <TouchableOpacity
      // el step 5 desaparece el boton siguiente
    
      style={step === 5 ? styles.nextButtonHidde : styles.nextButton} onPress={nextStep}>
        <Text style={styles.nextButtonText}>
        {step === 1 && 'Siguiente' }
        {step === 2 && 'Siguiente' }
        {step === 3 && 'Siguiente' }
        {step === 4 && 'Buscar Personal' }
        {step === 5 &&  '' }
  
        {step === 6 &&  'Solicitar Servicio' }
        {step === 7 &&  'Confirmar Solicitud' }
        {step === 8 &&  'Ver Historial De Servicios' }
        {step === 9 &&  'Confirmar y Pagar' }




        </Text>
      </TouchableOpacity>
    </View>
  );
}
