import { View, Text, TouchableOpacity } from 'react-native';

export interface ButtonProps {
  onPress: () => void;
  text: string;
}

export function Button({ text, onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
