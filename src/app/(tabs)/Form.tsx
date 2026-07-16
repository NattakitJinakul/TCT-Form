import Ionicons from "@expo/vector-icons/Ionicons";
import { FormStyles } from "@/src/styles/FormStyles";
import { useState } from "react";
import { Keyboard, Pressable, ScrollView, Switch, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const initialData = {
    name: "",
    gender: "",
    dept: "",
    comment: "",
    isAgree: false
};

function SectionLabel({ icon, text }: { icon: keyof typeof Ionicons.glyphMap, text: string }) {
    return (
        <View style={FormStyles.labelRow}>
            <Ionicons name={icon} size={15} color="#0ea5e9" />
            <Text style={FormStyles.label}>{text}</Text>
        </View>
    );
}

export default function Form() {
    const depts = [
        { text: 'Civil Engineering', value: 'CE', index: 1 },
        { text: 'Computer Education', value: 'CED', index: 2 },
        { text: 'Electrical Engineering', value: 'EE', index: 3 },
        { text: 'Mechanical Engineering', value: 'ME', index: 4 },
    ];

    const [data, setData] = useState(initialData);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={FormStyles.container} edges={['left', 'right', 'bottom']}>
            <View style={FormStyles.summaryBox}>
                <View style={FormStyles.summaryHeader}>
                    <Ionicons name="eye" size={16} color="#7dd3fc" />
                    <Text style={FormStyles.summaryTitle}>PREVIEW</Text>
                </View>
                <View style={FormStyles.summaryRow}>
                    <Text style={FormStyles.summaryKey}>Name</Text>
                    <Text style={FormStyles.summaryValue} numberOfLines={1}>{data.name || "-"}</Text>
                </View>
                <View style={FormStyles.summaryRow}>
                    <Text style={FormStyles.summaryKey}>Gender</Text>
                    <Text style={FormStyles.summaryValue} numberOfLines={1}>{data.gender || "-"}</Text>
                </View>
                <View style={FormStyles.summaryRow}>
                    <Text style={FormStyles.summaryKey}>Dept</Text>
                    <Text style={FormStyles.summaryValue} numberOfLines={1}>{data.dept || "-"}</Text>
                </View>
                <View style={FormStyles.summaryRow}>
                    <Text style={FormStyles.summaryKey}>Comment</Text>
                    <Text style={FormStyles.summaryValue} numberOfLines={1}>{data.comment || "-"}</Text>
                </View>
                <View style={FormStyles.summaryRow}>
                    <Text style={FormStyles.summaryKey}>Agree</Text>
                    <Text style={FormStyles.summaryValue}>{data.isAgree ? "Yes" : "No"}</Text>
                </View>
            </View>
            <ScrollView
                style={FormStyles.scroll}
                contentContainerStyle={FormStyles.scrollContent}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps="handled"
                automaticallyAdjustKeyboardInsets
            >
            <View style={FormStyles.section}>
                <SectionLabel icon="person" text="NAME" />
                <TextInput
                    style={FormStyles.TextInput}
                    value={data.name}
                    onChangeText={(text) => setData({ ...data, name: text })}
                    placeholder="Enter your name"
                    placeholderTextColor="#7ca6c0"
                />
            </View>

            <View style={FormStyles.section}>
                <SectionLabel icon="male-female" text="GENDER" />
                <View style={FormStyles.radio_pack}>
                    <Pressable
                        style={FormStyles.radioItem}
                        onPress={() => setData({ ...data, gender: "Male" })}
                    >
                        <RadioButton.Android
                            value="Male"
                            color="#0ea5e9"
                            status={data.gender === "Male" ? "checked" : "unchecked"}
                            onPress={() => setData({ ...data, gender: "Male" })}
                        />
                        <Text style={FormStyles.radioText}>Male</Text>
                    </Pressable>
                    <Pressable
                        style={FormStyles.radioItem}
                        onPress={() => setData({ ...data, gender: "Female" })}
                    >
                        <RadioButton.Android
                            value="Female"
                            color="#0ea5e9"
                            status={data.gender === "Female" ? "checked" : "unchecked"}
                            onPress={() => setData({ ...data, gender: "Female" })}
                        />
                        <Text style={FormStyles.radioText}>Female</Text>
                    </Pressable>
                </View>
            </View>

            <View style={FormStyles.section}>
                <SectionLabel icon="school" text="DEPARTMENT" />
                <Dropdown
                    style={FormStyles.Dropdown}
                    data={depts}
                    labelField="text"
                    valueField="value"
                    placeholder="Select Department"
                    placeholderStyle={FormStyles.dropdownPlaceholder}
                    selectedTextStyle={FormStyles.dropdownSelected}
                    value={data.dept}
                    onChange={(item) => setData({ ...data, dept: item.value })}
                />
            </View>

            <View style={FormStyles.section}>
                <SectionLabel icon="chatbubble-ellipses" text="COMMENT" />
                <TextInput
                    style={FormStyles.commentInput}
                    multiline
                    numberOfLines={4}
                    value={data.comment}
                    onChangeText={(text) => setData({ ...data, comment: text })}
                    placeholder="Enter your comment"
                    placeholderTextColor="#7ca6c0"
                />
            </View>

            <View style={FormStyles.switchRow}>
                <SectionLabel icon="shield-checkmark" text="DO YOU AGREE?" />
                <Switch
                    trackColor={{ true: '#0ea5e9' }}
                    value={data.isAgree}
                    onValueChange={(value) => setData({ ...data, isAgree: value })}
                />
            </View>
            </ScrollView>

            <View style={FormStyles.button_row}>
                <TouchableOpacity style={FormStyles.clearButton} onPress={() => setData(initialData)}>
                    <Ionicons name="refresh" size={16} color="#4a7a9b" />
                    <Text style={FormStyles.clearButtonText}>RESET</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
        </TouchableWithoutFeedback>
    )
}
