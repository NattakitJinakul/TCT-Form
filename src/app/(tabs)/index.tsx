import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CountStyle } from "../../styles/CountStyle";
import { Colors } from '@/src/styles/colors';

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <View style={CountStyle.container}>
      <View style={CountStyle.card}>
        <Text style={CountStyle.cardLabel}>COUNT</Text>
        <Text style={[CountStyle.cardValue, count < 0 && CountStyle.cardValueNegative]}>{count}</Text>
      </View>

      <View style={CountStyle.button_row}>
        <TouchableOpacity
          style={CountStyle.circleButton}
          onPress={() => setCount(count - 1)}>
          <Ionicons name="remove" size={32} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={CountStyle.circleButton}
          onPress={() => setCount(count + 1)}>
          <Ionicons name="add" size={32} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={CountStyle.resetButton}
        onPress={() => setCount(0)}>
        <Ionicons name="refresh" size={18} color={Colors.slate} />
        <Text style={CountStyle.resetText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
}
