// Raccourci : rnfc
// Ref Input : https://reactnative.dev/docs/textinput

import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { InputStyle } from './InputStyle';

const Input = ({ onAddItem }) => {

    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.trim() !== '') {
            onAddItem(text);
            setText('');
        }
    };

    return (
        <View>

            <TextInput
                style={InputStyle.input}
                placeholder="What's next ?"
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
