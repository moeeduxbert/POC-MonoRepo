import { View, Text, Pressable } from 'react-native';

export interface ButtonProps {
  onPress: () => void;
  text: string;
}

export function Button({ text, onPress }) {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{text}</Text>
      </Pressable>
    </View>
  );
}

export default Button;
