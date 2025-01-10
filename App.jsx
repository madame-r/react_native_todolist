// Raccourci : rnfc

import React, { useState } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { AppStyle } from './AppStyle';
import Input from './components/Input/Input';
import imgHeader from './assets/img/img_header.jpg';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Ajouter un item à la liste
    const handleAddItem = (item) => {
        setTasks([...tasks, { id: Date.now().toString(), text: item }]);
    };

    // Supprimer un item de la liste
    const handleDeleteItem = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <View style={AppStyle.main}>
            <ImageBackground source={imgHeader} style={AppStyle.img_header} />

            <View style={AppStyle.container}>
                <Text style={AppStyle.titre}>TO DO LIST</Text>
                <Input onAddItem={handleAddItem} />

                {/* FlatList avec bouton de suppression */}
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={AppStyle.taskContainer}>
                            <Text style={AppStyle.task}>{item.text}</Text>
                            <TouchableOpacity onPress={() => handleDeleteItem(item.id)} style={AppStyle.deleteButton}>
                                <Text style={AppStyle.deleteText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default App;
