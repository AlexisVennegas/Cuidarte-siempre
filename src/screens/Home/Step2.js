import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "../../Style/HomeScreenStyles";
import { stylesSteps } from "../../Style/HomeScreenStyles";
import { Picker } from "@react-native-picker/picker";
import { needData } from "../../Data/needData";


const Step2 = ({selectcategories, setSelectCategories, formData, setFormData}) => {


     // funcion para las categories
  const toggleCategory = (category) => {
    if (selectcategories.includes(category)) {

      setSelectCategories(selectcategories.filter((c) => c !== category));

    } else {
      setSelectCategories([...selectcategories, category]);

    }
    setFormData({
      ...formData,
      selectcategories: selectcategories,
    });
    
  };
 
return (
    <>
    <View style={styles.subContainer}>
      <ScrollView contentContainerStyle={stylesSteps.needsGrid}>
        {needData.map((item, index) => (
          <TouchableOpacity
            key={index} /// metodo para que cambie de color al seleccionar
            style={[
              stylesSteps.needButton,
              selectcategories.includes(item) &&
              stylesSteps.needButtonSelected,
            ]}
            onPress={() => toggleCategory(item)}
          >
            <Text style={stylesSteps.needButtonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </>

)

}
export default Step2;