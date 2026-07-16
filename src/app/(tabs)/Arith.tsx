import Ionicons from "@expo/vector-icons/Ionicons";
import { ArithStyles } from "@/src/styles/ArithStyles";
import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export default function Arith() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("0");

    const calc = (op: "add" | "sub") => {
        const a = Number(num1);
        const b = Number(num2);
        if (isNaN(a) || isNaN(b)) {
            setResult("Error");
            return;
        }
        setResult(String(op === "add" ? a + b : a - b));
        Keyboard.dismiss();
    };

    const isBad = result === "Error" || Number(result) < 0;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={ArithStyles.container}>
            <View style={[ArithStyles.resultCard, isBad && ArithStyles.resultCardNegative]}>
                <Text style={ArithStyles.resultLabel}>RESULT</Text>
                <Text style={ArithStyles.resultValue}>{result}</Text>
            </View>

            <View style={ArithStyles.inputGroup}>
                <Text style={ArithStyles.inputLabel}>NUMBER X</Text>
                <TextInput
                    style={ArithStyles.TextInput}
                    keyboardType="numeric"
                    placeholder="0"
                    value={num1}
                    onChangeText={(text) => setNum1(text)}
                />
            </View>
            <View style={ArithStyles.inputGroup}>
                <Text style={ArithStyles.inputLabel}>NUMBER Y</Text>
                <TextInput
                    style={ArithStyles.TextInput}
                    keyboardType="numeric"
                    placeholder="0"
                    value={num2}
                    onChangeText={(text) => setNum2(text)}
                />
            </View>

            <View style={ArithStyles.button_pack}>
                <TouchableOpacity
                    style={ArithStyles.addButton}
                    onPress={() => calc("add")}>
                    <Ionicons name="add" size={18} color="#ffffff" />
                    <Text style={ArithStyles.buttonText}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ArithStyles.subButton}
                    onPress={() => calc("sub")}>
                    <Ionicons name="remove" size={18} color="#ffffff" />
                    <Text style={ArithStyles.buttonText}>SUB</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ArithStyles.resetButton}
                    onPress={() => { setNum1(""); setNum2(""); setResult("0") }} >
                    <Ionicons name="refresh" size={18} color="#ffffff" />
                    <Text style={ArithStyles.buttonText}>RESET</Text>
                </TouchableOpacity>
            </View>
        </View >
        </TouchableWithoutFeedback>
    );
}
