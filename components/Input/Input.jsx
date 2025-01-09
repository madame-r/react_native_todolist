// Raccourci : rnfc
// Ref Input : https://reactnative.dev/docs/textinput

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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
            <TextInput style={InputStyle.input} placeholder="Quoi acheter ?" value={text} onChangeText={(value) => setText(value)} />
            <Button title="Ajouter" onPress={handleAdd}/>
        </View>
    );
};



export default Input;
