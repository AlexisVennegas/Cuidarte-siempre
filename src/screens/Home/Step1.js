// Step1.js
import React from 'react';
import { FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { categories } from '../Data/categoriesData';
import { styles } from '../Style/HomeScreenStyles';

const Step1 = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <Text style={styles.title}>Para poder ofrecerte el mejor servicio, necesitamos que nos proporciones la siguiente información</Text>
      <FlatList
        contentContainerStyle={styles.subContainer}
        data={categories}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSelected = selectedCategory === item.id;
          return (
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
};

export default Step1;
