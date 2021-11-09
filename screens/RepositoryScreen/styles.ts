import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputContainer: {
    height: 60,
    width: '90%',
  },
  button: {
    marginVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListView: {
    flex: 1,
    marginVertical: 12,
    width: '90%',
  },
  input: {
    marginVertical: 12,
    borderRadius: 4,
    flex: 1,
    paddingHorizontal: 12,
  },
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerView: {
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '800',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '800',
  },
  jobText: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default styles;
