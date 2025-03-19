import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "../../Style/HomeScreenStyles";
import { stylesSteps } from "../../Style/HomeScreenStyles";
import { Picker } from "@react-native-picker/picker";
import { diseaseData } from "../../Data/enfermedadesData";


const Step4 = ({selectdiseases, setSelectDiseases}) => {

    const toggleDisease = (disease) => {
        if (selectdiseases.includes(disease)) {
          setSelectDiseases(selectdiseases.filter((d) => d !== disease));
        } else {
          setSelectDiseases([...selectdiseases, disease]);
        }
        // setFormData({
        //   ...formData,
        //   selectdiseases: selectdiseases,
        // });
      };
    return (

        <>
            {/* Paso 3: Selección de padecimientos */}
            <ScrollView contentContainerStyle={stylesSteps.needsGrid}>
                {diseaseData.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            stylesSteps.needButton,
                            selectdiseases.includes(item) &&
                            stylesSteps.needButtonSelected,
                        ]}
                        onPress={() => toggleDisease(item)}
                    >
                        <Text style={stylesSteps.needButtonText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    )
}

export default Step4;