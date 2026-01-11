import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#4D4D4D'
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column'
  }
});
