import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    // Charger les tâches depuis AsyncStorage
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
    const addTask = (text) => {
        const newTasks = [...tasks, { id: Date.now().toString(), text }];
        setTasks(newTasks);
        saveTasks(newTasks);
    };

    // Supprimer une tâche
    const deleteTask = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
        saveTasks(filteredTasks);
    };

    // Effacer toutes les tâches
    const clearAllTasks = async () => {
        try {
            await AsyncStorage.removeItem('tasks');
            setTasks([]);
        } catch (error) {
            console.error('Erreur lors de la suppression de toutes les tâches :', error);
        }
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, deleteTask, clearAllTasks }}>
            {children}
        </TasksContext.Provider>
    );
};
