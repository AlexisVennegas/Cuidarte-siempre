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
    // marca las categorias seleccionadas
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectcategories, setSelectCategories] = useState([]);
  const [selectdiseases, setSelectDiseases] = useState([]);
  const [step, setStep] = useState(1);  // Controlar el paso actual

  const [selectedDays, setSelectedDays] = useState([]);
  // marca la hora de inicio y fin
  const [startTime, setStartTime] = useState('0:00');
  const [endTime, setEndTime] = useState('0:00');
  // marca la fecha de inicio
  const [startDate, setStartDate] = useState('');
  // marca la fecha de fin
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("card");

  const [phone, setPhone] = useState("");
// marca la fecha de inicio
  const days = ["L", "M", "X", "J", "V", "S", "D"];




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
        <Image source={require('../../assets/enfermera_image.png')} // Cambia la ruta de la imagen según tu estructura de carpetas 
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
        );
      case 7:
        return (
          <>
            {/* Paso 7: Pasarela de pago */}
            <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
      

      

      {/* Perfil */}
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }}>
        <Image 
          source={require('../../assets/enfermera_image.png')} // Cambia la ruta de la imagen según tu estructura de carpetas
          style={{ width: 60, height: 60,  marginRight: 10 }}
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

      {/* Horario */}
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
          editable={false}
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
          // uamos starttime para el value
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
        onChangeText={setStartDate}
        placeholder={`${new Date().toLocaleDateString()}`}
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

      {/* Botón de confirmar */}
  

    
    </ScrollView>
            {/* Muestra las opciones de pago */}
          </>
        );
        case 8: 
        return (
          <>
         <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
 
      
     {/* Tarjeta de crédito/débito */}
      <TouchableOpacity 
        style={{
          backgroundColor: "#F8F9FA",
          borderRadius: 15,
          padding: 15,
          marginTop: 10,
          borderWidth: selectedMethod === "card" ? 2 : 0,
          borderColor: "#007BFF"
        }}
        onPress={() => setSelectedMethod("card")}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>
          Tarjeta de crédito/débito
        </Text>
        <View style={{
          backgroundColor: "#007BFF",
          borderRadius: 15,
          padding: 15,
          alignItems: "center"
          
        }}>
          
          <Text style={{ color: "#fff", fontSize: 16 }}>Fancy VISA</Text>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginVertical: 5 }}>
            1237 6890 7654 5678
          </Text>
          <Text style={{ color: "#fff", fontSize: 12 }}>
            Name: Arina Hawadah | Exp: 10/24
          </Text>
        </View>
      </TouchableOpacity>

      {/* Añadir tarjeta */}
      <TouchableOpacity 
        style={{
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 10,
          padding: 15,
          marginVertical: 10,
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>AÑADIR TARJETA</Text>
      </TouchableOpacity>

      {/* PayPal */}
      <TouchableOpacity 
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F8F9FA",
          borderRadius: 15,
          padding: 15,
          borderWidth: selectedMethod === "paypal" ? 2 : 0,
          borderColor: "#007BFF"
        }}
        onPress={() => setSelectedMethod("paypal")}
      >
        <Image 
          source={require('../../assets/paypal.png')} // Cambia la ruta de la imagen según tu estructura de carpetas
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        <Text style={{ fontSize: 16 }}>Paypal</Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View 
            style={{
              width: 20, height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#007BFF",
              backgroundColor: selectedMethod === "paypal" ? "#007BFF" : "#fff"
            }} 
          />
        </View>
      </TouchableOpacity>


   

    
    </ScrollView>
          </>
        );
      default:
        return null;
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
      <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
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
