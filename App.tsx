import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

interface Goal {
  text: string,
  id: string
}

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText: string): void {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    setModalIsVisible(false);
  }

  function removeGoalsHandler(): void {
    setCourseGoals([]);
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id)
    }
    );
    console.log('DELETE');
  }

  function closeModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style='inverted' />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal" 
          color="#a065ec" 
          onPress={startAddGoalHandler}
        />
        <GoalInput 
          modalIsVisible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={closeModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals} 
            renderItem= {(itemData) => {
              return (
                <GoalItem 
                  text={itemData.item.text} 
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler} 
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
            alwaysBounceVertical={false} 
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
    marginTop: 24
  },
});
