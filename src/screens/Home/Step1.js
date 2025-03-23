import React, { useState } from 'react';
import {  Image, FlatList,TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from "../../Style/HomeScreenStyles";
import { stylesSteps } from "../../Style/HomeScreenStyles";
import { Picker } from "@react-native-picker/picker";
import { categories } from "../../Data/categoriesData";

const Step1 = ({selectedCategory, setSelectedCategory, formData, setFormData}) => {

    const [selectcategories, setSelectCategories] = useState([]);
   // const [selectedCategory, setSelectedCategory] = useState(null);
   const toggleCategory = (category) => {
    let updatedCategories;
    if (selectcategories.includes(category)) {
      updatedCategories = selectcategories.filter((c) => c !== category);
    } else {
      updatedCategories = [...selectcategories, category];
    }

    setSelectCategories(updatedCategories);
    setFormData({
      ...formData,
      selectedCategory: category,  // Guardar la categoría seleccionada en formData
      selectcategories: updatedCategories,
    });
  };


  return (
    <>
    {/* Paso 1: Selección de servicio */}
    {/* <Text style={stylesSteps.title}>
    
    </Text> */}
       <View style={styles.subContainer}>
    <FlatList
      contentContainerStyle={styles.subContainer}
      data={categories}
      numColumns={3}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item.id;
        return (
          // encerramos en un container para que se vea el borde

          <TouchableOpacity
            style={[
              styles.categoryButton,
              isSelected && styles.categoryButtonSelected,
            ]}
            //onPress={() => setSelectedCategory(item.id)}
            // hacer ambas cosas con el onpress
            onPress={() => {
              setSelectedCategory(item.id);
              toggleCategory(item.id);
            }}
          >
            <Image source={item.icon} style={styles.categoryIcon} />
            <Text
              style={[
                styles.categoryText,
                isSelected && styles.categoryTextSelected,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
      />
      </View>
  </>
  )
}
export default Step1;