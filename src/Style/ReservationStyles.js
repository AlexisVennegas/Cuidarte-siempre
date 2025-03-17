import { StyleSheet } from 'react-native';


export const reservationStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F8F8F8",
    },
    header: {
      alignItems: "center",
      marginTop: 30,
      marginBottom: 10,
    },
    logo: {
      width: 150,
      height: 50,
      resizeMode: "contain",
    },
    welcomeText: {
      fontSize: 18,
      color: "#333",
      marginTop: 10,
    },
    name: {
      color: "#0096FF",
      fontWeight: "bold",
    },
    backIcon: {
      position: "absolute",
      left: 20,
      top: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    card: {
      flexDirection: "row",
      backgroundColor: "white",
      marginHorizontal: 20,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 10,
      elevation: 3,
    },
    profileImage: {
      width: 60,
      height: 60,
      // borderRadius: 30,
    },
    cardContent: {
      flex: 1,
      marginLeft: 10,
    },
    nameText: {
      fontWeight: "bold",
      fontSize: 16,
    },
    roleText: {
      color: "#666",
    },
    experienceText: {
      color: "#666",
    },
    highlight: {
      color: "#0096FF",
      fontWeight: "bold",
    },
    dateText: {
      color: "#666",
    },
    bold: {
      fontWeight: "bold",
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    ratingText: {
      marginLeft: 5,
      fontWeight: "bold",
    },
    requestButton: {
      backgroundColor: "#0096FF",
      paddingVertical: 15,
      marginHorizontal: 20,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 20,
    },
    requestButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    navBar: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "white",
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: "#ddd",
    },
    navItem: {
      alignItems: "center",
    },
    navText: {
      fontSize: 12,
      color: "black",
    },
  });
  