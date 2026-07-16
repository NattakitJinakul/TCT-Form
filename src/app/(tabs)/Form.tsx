import { FormStyles } from "@/src/styles/FormStyles";
import { useState } from "react";
import { ScrollView, Switch, Text, TextInput, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Form() {
    const depts = [
        { text: 'Please Select Department', value: '', index: 0 },
        { text: 'Civil Engineering', value: 'CE', index: 1 },
        { text: 'Computer Education', value: 'CED', index: 2 },
        { text: 'Electrical Engineering', value: 'EE', index: 3 },
        { text: 'Mechanical Engineering', value: 'ME', index: 4 },
    ];

    const [data, setData] = useState({
        name: "",
        gender: "",
        dept: "",
        comment: "",
        isAgree: false
    })
    return (
        <SafeAreaView style={FormStyles.container}>
            <View style={FormStyles.summaryBox}>
                <ScrollView>
                    <Text style={FormStyles.summaryText}>Name : {data.name} </Text>
                    <Text style={FormStyles.summaryText}>Gender : {data.gender} </Text>
                    <Text style={FormStyles.summaryText}>Dept : {data.dept} </Text>
                    <Text style={FormStyles.summaryText}>Comment : {data.comment}</Text>
                    <Text style={FormStyles.summaryText}>Agree : {data.isAgree ? "Yes" : "No"} </Text>
                </ScrollView>
            </View>
            <View style={FormStyles.section}>
                <Text style={FormStyles.label}>NAME : </Text>
                <TextInput
                    style={FormStyles.TextInput}
                    value={data.name}
                    onChangeText={(text) => setData({ ...data, name: text })}
                    placeholder="Enter your name"
                />
            </View>

            <View style={FormStyles.section}>
                <RadioButton.Group
                    value={data.gender}
                    onValueChange={(value) => setData({ ...data, gender: value })}
                >
                    <Text style={FormStyles.label}>Gender:  </Text>
                    <View style={FormStyles.radio_pack}>
                        <View style={FormStyles.radioItem}><RadioButton value="Male" /><Text>MALE</Text></View>
                        <View style={FormStyles.radioItem}><RadioButton value="Female" /><Text>FEMALE</Text></View>
                    </View>
                </RadioButton.Group>
            </View>

            <View style={FormStyles.section}>
                <Text style={FormStyles.label}>Department : </Text>
                <Dropdown
                    style={FormStyles.Dropdown}
                    data={depts}
                    labelField="text"
                    valueField="value"
                    placeholder="Select Department"
                    value={data.dept}
                    onChange={(item) => setData({ ...data, dept: item.value })}
                />
            </View>

            <View style={FormStyles.section}>
                <Text style={FormStyles.label}>Comment : </Text>
                <TextInput
                    style={FormStyles.commentInput}
                    multiline
                    numberOfLines={4}
                    value={data.comment}
                    onChangeText={(text) => setData({ ...data, comment: text })}
                    placeholder="Enter your comment"
                />
            </View>

            <View style={FormStyles.switchRow}>
                <Text style={FormStyles.label}> Do you agree?</Text>
                <Switch
                    value={data.isAgree}
                    onValueChange={(value) => setData({ ...data, isAgree: value })}
                />
            </View>
        </SafeAreaView >
    )
}
