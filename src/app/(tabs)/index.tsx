import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CountStyle } from "../../styles/CountStyle";

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <View style={CountStyle.container}>
      <Text style={CountStyle.TextCountResult}> Count : {count}</Text>
      <View>
        <TouchableOpacity
          style={CountStyle.TouchableOpacity}
          onPress={() => setCount(count + 1)}>
          <Text
            style={CountStyle.TouchableOpacityText}
          > + </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CountStyle.TouchableOpacity}
          onPress={() => setCount(count - 1)}>
          <Text
            style={CountStyle.TouchableOpacityText}
          > - </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CountStyle.TouchableOpacityReset}
          onPress={() => setCount(0)}>
          <Text
            style={CountStyle.TouchableOpacityText}
          > RESET </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

