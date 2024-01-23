// /* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Image} from 'react-native';
import {StyleSheet, ActivityIndicator, Linking} from 'react-native';
import React, {useCallback, useEffect, useState, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const PhotoScreen = navigation => {
  const [loading, setLoading] = useState(null);
  const [flashtoggle, setFlashToggle] = useState(false);
  const cameraRef = useRef(Camera);
  const [camView, setCamView] = useState('back');
  const [torch, setTorch] = useState('off');
  const devices = useCameraDevices('');
  const device = camView === 'back' ? devices.back : devices.front;

  const cameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'denied') {
      await Linking.openSettings();
    }
    setLoading(devices);
  }, [devices]);

  useEffect(() => {
    cameraPermission();
  }, [cameraPermission, devices]);

  const takePhoto = async () => {
    setLoading(true);
    try {
      //Error Handle better
      if (cameraRef.current == null) {
        throw new Error('Camera Ref is Null');
      }

      console.log('Photo taking ....');
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'quality',
        flash: `${torch}`,
        enableAutoRedEyeReduction: true,
      });
      console.log(photo);
    } catch (error) {
      console.log(error, 'kkkk');
    }
  };

  if (device == null) {
    return <ActivityIndicator style={{flex: 1}} size={50} color="red" />;
  }
  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        photo={true}
        isActive={true}
        ref={cameraRef}
      />

      <View style={styles.shutterContainer}>
        <TouchableOpacity
          style={styles.cameraFlashBtn}
          onPress={() => {
            setFlashToggle(!flashtoggle);
            torch === 'off' ? setTorch('on') : setTorch('off');
          }}>
          <Image source={require('../../../assets/Images/Flashh.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            takePhoto();
          }}>
          <View style={styles.shutter}>
            <View style={styles.shutterBtn} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cameraFlipBtn}
          onPress={() => {
            camView === 'back' ? setCamView('front') : setCamView('back');
          }}>
          <Image source={require('../../../assets/Images/Flipp.png')} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  close: {
    position: 'absolute',
    left: 0,
  },
  shutterContainer: {
    height: '100%',
    width: '100%',
    top: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutter: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: 'white',
  },
  shutterBtn: {
    top: 1,
    left: 0.75,
    backgroundColor: 'white',
    height: 54,
    width: 54,
    borderRadius: 55,
  },
  cameraFlipBtn: {
    position: 'absolute',
    right: '20%',
  },
  cameraFlashBtn: {
    position: 'absolute',
    left: '20%',
  },
});
