import { StyleSheet, View, TextInput, Button } from "react-native"
import { useState } from 'react';

interface GoalInputProps {
  onAddGoal: (enteredGoalText: string) => void;
}

const GoalInput = (props: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  function goalInputHandler(enteredText: string): void {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(): void {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

	return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput} 
        placeholder= 'Your course goal!'
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title='Add goal' onPress={addGoalHandler}/>
    </View>
	)
}

export default GoalInput

const styles = StyleSheet.create ({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc'
	},
		textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		padding: 5,
		marginRight: 6
	},
})