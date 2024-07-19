import { Text, StyleSheet, StyleProp, TextStyle } from "react-native"

import Colors from "../../constants/colors"

interface InstructionTextProps {
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

const InstructionText: React.FC<InstructionTextProps> = ({ children, style }) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24
  },
})