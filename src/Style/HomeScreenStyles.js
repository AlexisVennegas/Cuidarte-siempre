import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
backButton: {
    padding: 10,
},
backButtonText: {
    fontSize: 18,
    color: '#008CFF',
},
stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
},
stepCircle: {
    backgroundColor: '#008CFF',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
},
stepNumber: {
    color: 'white',
    fontWeight: 'bold',
},
title: {
    fontSize: 16,
    fontWeight: 'bold',
},
needsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
},
needButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
},
needButtonText: {
    fontSize: 14,
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
},
  paso :{
    fontSize: 16,
    color: '#333',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 320,
    height: 56,
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
    elevation: 2,
  },
  
  categoryButtonSelected: {
    backgroundColor: '#0096FF',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
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
  nextButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
