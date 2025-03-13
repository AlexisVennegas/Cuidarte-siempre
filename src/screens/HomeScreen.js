import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { categories } from '../Data/categoriesData';
import { needData } from '../Data/needData';
import { diseaseData } from '../Data/enfermedadesData';
import { Picker } from '@react-native-picker/picker';

// Categorías iniciales de la primera vista


export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [step, setStep] = useState(1);  // Controlar el paso actual
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startDate, setStartDate] = useState('');

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
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
                  <TouchableOpacity key={index} style={stylesSteps.needButton}>
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
                <TouchableOpacity key={index} style={stylesSteps.needButton}>
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
const stylesSteps = StyleSheet.create({
  container: {
  
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
  },
  name: {
    color: '#008CFF',
    fontWeight: 'bold',
  },

  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepCircle: {
    backgroundColor: '#008CFF',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  stepNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleCategories: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  needsGrid: {
    flexDirection: 'row',
    // pra que ocupe el 100% del ancho


    flexWrap: 'wrap',
    gap: 10,  // Espacio entre los botones

  },
  needButton: {
    backgroundColor: '#E8E8E8',
    padding: 10,
    height: 50,
    borderRadius: 20,
    // paddingVertical: 10,
    // paddingHorizontal: 15,
    justifyContent: 'center',
    // margin: 5,
  },
  needButtonText: {
    fontSize: 12,
    // bold 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#008CFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

const styles = StyleSheet.create({
  containerInfo: {
  
    width: '100%',
    height: '25%',
    padding: 20,
  },
  titletimerDE: {
    // alineams ek texti

    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#008CFF',
  },
  paso: {
    fontSize: 16,
    color: '#333',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  subContainer: {
    flex: 1,
    marginTop: 50,
    // Puedes ajustar el padding o margen si es 
  },
  containerTimer: {
    flex: 1,
  
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 320,
    height: 56,
    // que no se vaya tan arribna
    marginTop: 40,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 16,
    color: '#333',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  categoryButton: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    padding: 15,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 100,
    height: 100,
  },

  categoryButtonSelected: {
    backgroundColor: '#0096FF',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  timeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
   
    alignItems: 'center',
  },
  timeInput: {
  
    width: 95,
    height: 56,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
 
    borderColor: '#ccc',
    justifyContent: 'center',
  },
 select: {
    width: '100%',
    height: 56,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,  
    paddingHorizontal: 8,
    marginBottom: 16,
 },

  daysContainer: {

    width: '100%',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 20
  },
  dayButton: {
    width: 40,
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dayButtonSelected: {
    backgroundColor: '#007bff',
  },
  dayText: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 56,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
