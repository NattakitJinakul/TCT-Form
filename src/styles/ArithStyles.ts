import { StyleSheet } from 'react-native';
export const ArithStyles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f2f6fc',
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#000000',
        padding: 10,
        margin: 5,     
    },
    TextResult: {
        fontSize: 20,
        alignSelf: 'center',
        margin : 20,
        borderWidth: 1,
        borderColor: '#000000',
        padding: 10,
        borderRadius: 5,
    },
    addButton:{
        backgroundColor: '#0fb27e',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    subButton:{
        backgroundColor: '#f0d356',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    resetButton:{
        backgroundColor: '#FF4500',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    button_pack:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',   
    }
});
