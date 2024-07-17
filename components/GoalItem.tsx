import { StyleSheet, View, Text, Pressable } from "react-native"

interface GoalItemProps {
    text: string,
    id: string,
    onDeleteGoal: (id: string) => void
 }

const GoalItem = ({ text, id, onDeleteGoal }: GoalItemProps) => {
  return (
    <Pressable 
      android_ripple={{ color: '#dddddd' }} 
      onPress={onDeleteGoal.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles= StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: 'white'  ,
    padding: 8,
  }
})