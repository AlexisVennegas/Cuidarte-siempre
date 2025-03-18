import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,   ScrollView} from 'react-native';


const Step8 = () => {

  const [selectedMethod, setSelectedMethod] = useState("card");



    return (
        <>
        <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>

     
    {/* Tarjeta de crédito/débito */}
     <TouchableOpacity 
       style={{
         flexDirection: "row",
         backgroundColor: "#F8F9FA",
         borderRadius: 15,
         padding: 15,
         marginTop: 10,
         borderWidth: selectedMethod === "card" ? 2 : 0,
         borderColor: "#007BFF"
       }}
       onPress={() => setSelectedMethod("card")}
     >
        <Image 
         source={require('../../../assets/target.png')} // Cambia la ruta de la imagen según tu estructura de carpetas
         style={{ width: 30, height: 30, marginRight: 10 }}
       />
       <Text style={{ fontSize: 16, }}>
         Tarjeta de crédito/débito
       </Text>
       
       {/* <View style={{
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
       </View> */}
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
         source={require('../../../assets/paypal.png')} // Cambia la ruta de la imagen según tu estructura de carpetas
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
    )
}
export default Step8;