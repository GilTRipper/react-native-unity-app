import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

enum RootRoutes {
  HOME = 'Home',
  UNITY = 'Unity',
}

type RootStackParamList = {
  [RootRoutes.HOME]: undefined;
  [RootRoutes.UNITY]: undefined;
};

type RootStackScreenProps<RN extends keyof RootStackParamList = RootRoutes> =
  NativeStackScreenProps<RootStackParamList, RN>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen: React.FC<RootStackScreenProps<RootRoutes.HOME>> = ({
  navigation,
}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.welcomeText}>
        Hello, from{' '}
        <Text style={[styles.welcomeText, styles.purple]}>dev.family</Text> team
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(RootRoutes.UNITY);
        }}>
        <Text style={styles.buttonText}>Go Unity</Text>
      </TouchableOpacity>
    </View>
  );
};

const UnityScreen = () => {
  return <View style={styles.screen} />;
};

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'purple',
            headerTitleStyle: {color: 'black'},
          }}>
          <Stack.Screen name={RootRoutes.HOME} component={HomeScreen} />
          <Stack.Screen name={RootRoutes.UNITY} component={UnityScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 30,
    paddingTop: 25,
  },
  button: {
    width: '100%',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 16,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  purple: {color: 'purple'},
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  welcomeText: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
  },
});

export default App;
