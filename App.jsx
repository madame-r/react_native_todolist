// Raccourci : rnfc

import React, {useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { AppStyle} from './AppStyle';
import Input from './components/Input/Input';



const App = () => {

const [tasks, setTasks] = useState([]);


const handleAddItem = (item) => {
    setTasks([...tasks, {id: Date.now().toString(), text:item}]);
};


    return (
        <View style={AppStyle.container}>
            <Text style={AppStyle.titre}>To Do List</Text>
            <Input onAddItem={handleAddItem}/>
            <FlatList data={tasks} keyExtractor={(item) => item.id} renderItem={({item}) => (<Text style={AppStyle.task}>{item.text}</Text>)} />
        </View>
    );
};



export default App;
