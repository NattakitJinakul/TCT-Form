import Ionicons from "@expo/vector-icons/Ionicons";
import { ArithStyles } from "@/src/styles/ArithStyles";
import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

type Op = "add" | "sub" | "mul" | "div";

export default function Arith() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("0");

    const calc = (op: Op) => {
        const a = Number(num1);
        const b = Number(num2);
        if (isNaN(a) || isNaN(b) || (op === "div" && b === 0)) {
            setResult("Error");
            return;
        }
        let value = 0;
        switch (op) {
            case "add": value = a + b; break;
            case "sub": value = a - b; break;
            case "mul": value = a * b; break;
            case "div": value = a / b; break;
        }
        setResult(String(Math.round(value * 1000000) / 1000000));
        Keyboard.dismiss();
    };

    const reset = () => {
        setNum1("");
        setNum2("");
        setResult("0");
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
            </View>
            <View style={ArithStyles.button_pack}>
                <TouchableOpacity
                    style={ArithStyles.mulButton}
                    onPress={() => calc("mul")}>
                    <Ionicons name="close" size={18} color="#ffffff" />
                    <Text style={ArithStyles.buttonText}>MUL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ArithStyles.divButton}
                    onPress={() => calc("div")}>
                    <Text style={ArithStyles.buttonText}>÷  DIV</Text>
                </TouchableOpacity>
            </View>
            <View style={ArithStyles.button_pack}>
                <TouchableOpacity
                    style={ArithStyles.resetButton}
                    onPress={reset}>
                    <Ionicons name="refresh" size={18} color="#ffffff" />
                    <Text style={ArithStyles.buttonText}>RESET</Text>
                </TouchableOpacity>
            </View>
        </View >
        </TouchableWithoutFeedback>
    );
}
