
    import React, { useState } from 'react';
    import { View, Text, TouchableOpacity, Image,   ScrollView} from 'react-native';
    import { FlatList } from 'react-native-gesture-handler';
    import { Ionicons } from '@expo/vector-icons';
    import {reservationStyle} from '../../Style/ReservationStyles';
    import { stylesSteps } from '../../Style/HomeScreenStyles';
    import {reservations} from '../../Data/reservationsData';
    // resivimos el paramettro step para saber en que paso estamos
    const Step5 =({ step, setStep })=> {   
        
    //usesate para contorlar el paso en el que estamos
        //const [step, setStep] = useState(5);
    const nextStep = () => {
        if (step < 10) {
        setStep(step + 1);
        }
        if (step === 10 ) {
        setStep(1);
        }
    };
        return (

            <>
            {/* Paso 5: Selección de personal */}
            <TouchableOpacity style={stylesSteps.searchButton} onPress={nextStep}>
                <FlatList
                // funcion si se presiona pasar a la siguiente pantalla

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
            </TouchableOpacity>

            {/* Muestra una lista de opciones de enfermeras o personal */}
        </>
        )
    }

    export default Step5