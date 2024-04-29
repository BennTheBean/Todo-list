import React from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import { Toggle } from './Components/Toggle';
import useLocalStorage from "use-local-storage";


function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className='task-app' data-theme={isDark ? "dark" : "light"}>
      <h1 className='signature'>ΛNDREW BENN</h1>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <TaskList />
    </div>
  );
}

export default App;