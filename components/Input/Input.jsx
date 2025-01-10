import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { InputStyle } from './InputStyle';
import { TasksContext } from '../../contexts/TasksContext';

const Input = () => {
    const [text, setText] = useState('');
    const { addTask } = useContext(TasksContext); // Accès à la méthode addTask depuis le contexte

    const handleAdd = () => {
        if (text.trim() !== '') {
            addTask(text); // Appelle addTask pour ajouter la tâche
            setText(''); // Réinitialise le champ texte
        }
    };

    return (
        <View>
            <TextInput
                style={InputStyle.input}
                placeholder="What's Next ?"
                value={text}
                onChangeText={(value) => setText(value)}
            />
            <TouchableOpacity style={InputStyle.button} onPress={handleAdd}>
                <Text style={InputStyle.buttonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Input;
