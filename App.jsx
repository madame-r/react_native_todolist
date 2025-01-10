import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importation d'AsyncStorage
import { AppStyle } from './AppStyle';
import Input from './components/Input/Input';
import imgHeader from './assets/img/img_header.jpg';

const App = () => {
    const [tasks, setTasks] = useState([]);


    // Charger les tâches depuis AsyncStorage au démarrage
    useEffect(() => {
        const loadTasks = async () => {
            try {
                const savedTasks = await AsyncStorage.getItem('tasks');
                if (savedTasks) {
                    setTasks(JSON.parse(savedTasks));
                }
            } catch (error) {
                console.error('Erreur lors du chargement des tâches :', error);
            }
        };
        loadTasks();
    }, []);




    // Sauvegarder les tâches dans AsyncStorage
    const saveTasks = async (updatedTasks) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des tâches :', error);
        }
    };



    // Ajouter une tâche
    const handleAddItem = (item) => {
        const newTasks = [...tasks, { id: Date.now().toString(), text: item }];
        setTasks(newTasks);
        saveTasks(newTasks); // Sauvegarde après ajout
    };



    // Supprimer une tâche
    const handleDeleteItem = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
        saveTasks(filteredTasks); // Sauvegarde après suppression
    };


    // Tout supprimer
    const clearAllTasks = async () => {
        try {
            await AsyncStorage.removeItem('tasks');
            setTasks([]);
        } catch (error) {
            console.error('Erreur lors de la suppression de toutes les tâches :', error);
        }
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


            <View style={AppStyle.clearAllContainer}>
                <TouchableOpacity  onPress={()=> clearAllTasks()}  style={AppStyle.clearAllButton}>
                    <Text style={AppStyle.clearAllText}>CLEAR ALL</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default App;
