import { useState } from "react"
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native"

import PrimaryButton from "../components/ui/PrimaryButton"
import Colors from "../constants/colors"
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"

interface StartGameScreenProps {
  onPickedNumber: (chosenNumber: number) => void
}

const StartGameScreen: React.FC<StartGameScreenProps> = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>('')

  const { width, height } = useWindowDimensions()

  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText)
  }

  function confirmInputNumber() {
    const chosenNumber = parseInt(enteredNumber)

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        "Number has to be a number between 1 and 99",
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return
    }

    onPickedNumber(chosenNumber)
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  const marginTopDistance =  height < 380 ? 30 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput 
              style={styles.numberInput} 
              maxLength={2} 
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler.bind(this, )}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputNumber}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

// const deviceWidth = Dimensions.get('window').width
// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create ({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})