import React from 'react';
import { TasksProvider } from './contexts/TasksContext';
import MainScreen from './components/MainScreen/MainScreen';

const App = () => {
    return (
        <TasksProvider>
            <MainScreen />
        </TasksProvider>
    );
};

export default App;
