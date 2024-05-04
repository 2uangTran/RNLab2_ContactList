import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/StackNavigation';
import { Provider } from 'react-native-paper';


export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});