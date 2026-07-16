import { ArithStyles } from "@/src/styles/ArithStyles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Arith() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("0");

    return (
        <View style={ArithStyles.container}>
            <Text style={ArithStyles.TextResult}>Result : {result}</Text>
            <View>
                <TextInput
                    style={ArithStyles.TextInput}
                    keyboardType="numeric"
                    placeholder="Enter number "
                    value={num1}
                    onChangeText={(text) => setNum1(text)}
                />
                <TextInput
                    style={ArithStyles.TextInput}
                    keyboardType="numeric"
                    placeholder="Enter number "
                    value={num2}
                    onChangeText={(text) => setNum2(text)}
                />
            </View>
            <View style={ArithStyles.button_pack}>
                <TouchableOpacity
                    style={ArithStyles.addButton}
                    onPress={() => { setResult(String(Number(num1) + Number(num2))) }}>
                    <Text>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ArithStyles.subButton}
                    onPress={() => { setResult("" + (Number(num1) - Number(num2))) }} >
                    <Text>SUB</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ArithStyles.resetButton}
                    onPress={() => { setNum1(""); setNum2(""); setResult("0") }} >
                    <Text>RESET</Text>
                </TouchableOpacity>

            </View>


        </View >
    );

}