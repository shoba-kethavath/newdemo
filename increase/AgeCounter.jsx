import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function AgeCounter() {
  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
  }

  return (
    <>
      <TouchableOpacity onPress={increaseAge} 
      style={{ backgroundColor: "green", padding: 10, marginBottom: 10 }}>
     <Text style={{ fontSize: 20, color: "white" }}>Increase Age</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20 }}>I am {age} years old</Text>
    </>
  );
}
