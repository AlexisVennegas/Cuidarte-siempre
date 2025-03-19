import { StyleSheet } from 'react-native';


export const phoneStyle = StyleSheet.create({
    input: {
        backgroundColor: "#F0F0F0",
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 20,
    },
    invalidInput: {
        borderColor: 'red', // Cambiar color del borde cuando el teléfono es inválido
      },
      errorText: {
        color: 'red',
        marginTop: 5,
      },
});