import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import DatePicker from 'react-native-date-picker';

import { styles } from "../Style/HomeScreenStyles";
import { stylesSteps } from "../Style/HomeScreenStyles";
import { reservations } from "../Data/reservationsData";
import { Ionicons } from "@expo/vector-icons";
import { reservationStyle } from "../Style/ReservationStyles";
// import DateTimePicker from '@react-native-community/datetimepicker';
import Step9 from "./Home/Step9";
import Step8 from "./Home/Step8";
import Step7 from "./Home/Step7";
import Step6 from "./Home/Step6";
import Step5 from "./Home/Step5";
import  Step4 from "./Home/Step4";
import Step3 from "./Home/Step3";
import Step2 from "./Home/Step2";
import Step1 from "./Home/Step1";
// Categorías iniciales de la primera vista

export default function HomeScreen() {
  // marca las categorias seleccionadas
  const [selectdiseases, setSelectDiseases] = useState([]);
  const [step, setStep] = useState(1); // Controlar el paso actual
  const [startTime, setStartTime] = useState("0:00");
  const [endTime, setEndTime] = useState("0:00");
  const [selectedDays, setSelectedDays] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const hideDatePicker = () => setDatePickerVisibility(false);
  // un json para ir guardando la informacion del formulario
  const [formData, setFormData] = useState({
    selectedCategory: null,
    selectcategories: [],
    selectdiseases: [],
    startTime: "0:00",
    endTime: "0:00",
    selectedDays: [],
    startDate: "",
  });
  const [date, setDate] = useState('');

  const [startDate, setStartDate] = useState("");


  const nextStep = () => {
    if (step < 10) {
      setStep(step + 1);
    }
    if (step === 10) {
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
       <Step1 />
        );
      case 2:
        return (
          <Step2 selectcategories={selectcategories} setSelectCategories={setSelectCategories}
            />
        );
      case 3:
        return (
          <Step3 selectdiseases={selectdiseases} setSelectDiseases={setSelectDiseases}
          />
        );
      case 4:
        return (
          <Step4 // Pasamos las props necesarias
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
            startDate={date}
            setStartDate={setStartDate}
          />);
      case 5:
        return <Step5 step={step} setStep={setStep} />; // Pasamos setStep como prop
      case 6:
        return <Step6 />;
      case 7:
        return <Step7
          // le pasamos por props los days
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          startDate={date}
          setStartDate={setStartDate}
          startTime={startTime}
          endTime={endTime}
        />;
      case 8:
        return <Step8 />;
      case 9:
        return <Step9 />;
      default:
        return null;
    }
  };

  return (
    // header
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.welcomeText}>
          <Text style={styles.userName}>Hola, María Fernanda</Text>

          <TouchableOpacity style={styles.backButton} onPress={previousStep}>
            <Image
              source={require("../../assets/arrow.png")}
              style={styles.backIcon}
            // funcion press que regresa al paso anterior
            />
          </TouchableOpacity>
        </Text>
      </View>
      <View style={stylesSteps.stepIndicator}>
        <View style={stylesSteps.stepCircle}>
          <Text style={stylesSteps.stepNumber}>{step}</Text>
        </View>
        <Text style={stylesSteps.titleCategories}>
          {step === 1 && "Selecciona el tipo de servicio que solicitas"}
          {step === 2 &&
            "Selecciona las necesidades que tiene el paciente en el día a día"}
          {step === 3 && "¿Qué padecimientos tiene tu paciente?"}
          {step === 4 &&
            "Indica el horario y los días que necesitas el servicio"}
          {step === 5 &&
            "Estas son nuestras opciones de personal que más se adecuan a tus necesidades"}
          {step === 6 && "Detalles del personal"}
          {step === 7 && "Detalles de la solicitud"}
          {step === 8 && "Selecciona el método de pago"}
          {step === 9 && "Selecciona el método de pago"}
        </Text>
      </View>
      {/* Contenido dinámico según el paso */}
      {renderStepContent()}

      {/* Botón siguiente */}
      <TouchableOpacity
        // el step 5 desaparece el boton siguiente

        style={step === 5 ? styles.nextButtonHidde : styles.nextButton}
        onPress={nextStep}
      >
        <Text style={styles.nextButtonText}>
          {step === 1 && "Siguiente"}
          {step === 2 && "Siguiente"}
          {step === 3 && "Siguiente"}
          {step === 4 && "Buscar Personal"}
          {step === 5 && ""}

          {step === 6 && "Solicitar Servicio"}
          {step === 7 && "Confirmar Solicitud"}
          {step === 8 && "Ver Historial De Servicios"}
          {step === 9 && "Confirmar y Pagar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
