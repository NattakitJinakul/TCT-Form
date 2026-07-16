import { StyleSheet } from "react-native";

export const CountStyle = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f2f6fc',
    },
    TouchableOpacity:{
        borderRadius: 10,
        backgroundColor: '#00BFFF',
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },
    TouchableOpacityText:{
        color: '#FFFFFF',
        fontSize: 20,
    },
    TouchableOpacityReset:{
        borderRadius: 10,
        backgroundColor: '#ea0d2e',
        padding: 10,
        margin: 5,
        alignItems: 'center',
    },
    TextCountResult:{
        fontSize: 20,  
        alignSelf: 'center',
        margin : 20,
        borderWidth: 1,
        borderColor: '#000000',
        padding: 10,
        borderRadius: 5,
    }
})