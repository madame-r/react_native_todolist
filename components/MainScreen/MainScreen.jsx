import React, { useContext } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { TasksContext } from '../../contexts/TasksContext';
import { MainScreenStyle } from './MainScreenStyle';
import Input from '../Input/Input';
import imgHeader from '../../assets/img/img_header.jpg';

const MainScreen = () => {
    const { tasks, addTask, deleteTask, clearAllTasks } = useContext(TasksContext);

    return (
        <View style={MainScreenStyle.main}>
            <ImageBackground source={imgHeader} style={MainScreenStyle.img_header} />
            <View style={MainScreenStyle.container}>
                <Text style={MainScreenStyle.titre}>TO DO LIST</Text>
                <Input onAddItem={addTask} />
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={MainScreenStyle.taskContainer}>
                            <Text style={MainScreenStyle.task}>{item.text}</Text>
                            <TouchableOpacity
                                onPress={() => deleteTask(item.id)}
                                style={MainScreenStyle.deleteButton}
                            >
                                <Text style={MainScreenStyle.deleteText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <TouchableOpacity onPress={clearAllTasks} style={MainScreenStyle.clearAllButton}>
                <Text style={MainScreenStyle.clearAllText}>CLEAR ALL</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MainScreen;
