import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  close: {
    position: 'absolute',
    left: 0,
  },
  setting: {
    position: 'absolute',
    right: 0,
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
});
