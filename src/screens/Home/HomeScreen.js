/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{backgroundColor: 'black', height: '100%', width: '100%'}}>
      <View>
        <View style={styles.container}>
          <Text style={styles.heading}>Vision Camera</Text>
          <Text style={styles.subheading}>Demo</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Photos')}>
              <Image
                style={{height: 150, width: 200, borderRadius: 8}}
                source={{
                  // uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5c95d031973881.5669d0f5dbd49.jpg',
                  uri: 'https://i.pinimg.com/originals/fc/2d/89/fc2d897f9ab62120e52c9c99355fef47.gif',
                }}
              />
              <Text
                style={{
                  margin: 8,
                  fontSize: 20,
                  borderRadius: 8,
                  textAlign: 'center',
                  backgroundColor: '#FA7572',
                  width: 200,
                  height: 40,
                }}>
                Camera
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    top: 40,
  },
  subheading: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    top: 90,
  },
  buttonContainer: {
    height: 200,
    position: 'absolute',
    top: 300,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  chip: {
    width: 200,
    height: 200,
    top: 400,
    backgroundColor: 'purple',
    borderRadius: 7,
  },
});
