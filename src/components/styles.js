import { StyleSheet } from 'react-native';
import config from '../config/AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  textContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  textContent: {
    top: 25,
    color: config.color.COLOR_WHITE,
    fontSize: 20,
    fontFamily: config.fonts.FONT_BOOK
  },
  headerTitle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: -20,
    fontFamily: config.fonts.FONT_BOLD,
    fontSize: 16
  },
  barIcon: {
    marginLeft: 15
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%'
  },
  modalView: {
    margin: 20,
    backgroundColor: config.color.COLOR_WHITE,
    borderRadius: 20,
    alignItems: 'flex-end',
    shadowColor: config.color.COLOR_BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: config.color.COLOR_SECONDARY,
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginLeft: 10
  },
  textStyle: {
    color: config.color.COLOR_WHITE,
    textAlign: 'center',
    fontFamily: config.fonts.FONT_BOOK
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    fontSize: 15,
    fontFamily: config.fonts.FONT_BOOK
  },
  buttonWrap: {
    flexDirection: 'row',
    marginTop: 15
  },
  errorMessage: {
    color: config.color.COLOR_RED,
    fontSize: 13,
    fontFamily: config.fonts.FONT_BOOK,
    paddingTop: 4
  }
});

export default styles;
