import { Platform } from "react-native";

/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
const AppStyles = {
    color: {
      COLOR_PRIMARY: '#47a9c9',
      COLOR_SECONDARY: '#FFE56A',
      COLOR_WHITE: '#FFFFFF',
      COLOR_BLACK: '#000000',
      COLOR_RED: '#FF0000',
      COLOR_1F1F1F: '#1F1F1F',
      COLOR_BLUE: 'blue',
      COLOR_GREEN: 'green',
      COLOR_DCDCDC: '#DCDCDC',
      COLOR_00c6cc: '#00c6cc',
      COLOR_LIGHTGRAY: 'lightgray',
      COLOR_GRAY: 'gray',
      COLOR_f02626: '#f02626'
    },
    fonts: {
     
      FONT_BOOK: Platform.OS=="ios"?'Times New Roman':'Roboto',
    
    },
    texts: {
      LOADING: 'Loading...'
    }
  };
  export default AppStyles;
  