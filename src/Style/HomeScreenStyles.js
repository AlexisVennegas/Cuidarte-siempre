import { StyleSheet } from 'react-native';

export const stylesSteps = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,

  },
  subContainer: {
    flex: 1,
    marginTop: 50,
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
   // marginBottom: 15,
  },
  stepCircle: {
    backgroundColor: '#008CFF',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
   // marginRight: 10,
  },
  stepNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    
    marginTop: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleCategories: {
    fontSize: 16,
    marginStart: 10,

    fontWeight: 'bold',
  },
  needsGrid: {
    flexDirection: 'row',
    // pra que ocupe el 100% del ancho
    border: '1px solid purple',
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
  needButtonSelected: {
    backgroundColor: '#BAE5FF',
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

export const styles = StyleSheet.create({
  invalidInput: {
    borderColor: 'red', // Cambiar color del borde cuando la fecha es inválida
  },
  categoryTextSelected: {
    // le ponemos un backgrounr
    backgroundColor: '#BAE5FF',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
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
    // ponemos un elemento a lado del otro
  
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
  headerContainer: {
    border: '1px solid red',
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  container1: {
    width: '50%'
  },
  container2 : {
    width: '50%'
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
  username2: {
   
      fontSize: 18,
      fontWeight: "bold",

  },
  backIcon2: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  backButton2: {
    padding: 10,
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
    backgroundColor: '#BAE5FF',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 11,
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
  nextButtonHidde: {
    display: 'none',
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
    backgroundColor: '#BAE5FF',
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
