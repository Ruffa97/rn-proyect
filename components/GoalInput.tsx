import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
import { useState } from 'react';

interface GoalInputProps {
  modalIsVisible: boolean
  onAddGoal: (enteredGoalText: string) => void;
  onCancel: () => void;
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

  function closeModal(): void {
    props.onCancel();
  }


	return (
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput 
          style={styles.textInput} 
          placeholder= 'Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler} color='#b180f0'/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={closeModal} color='#f31282'/>
          </View>
        </View>
      </View>
    </Modal>
	)
}

export default GoalInput

const styles = StyleSheet.create ({
	inputContainer: {
    padding: 16,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#311b6b'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120483',
    borderRadius: 6,
		width: '100%',
		padding: 10,
	},
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  }
})