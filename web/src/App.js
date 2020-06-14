import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    body: '',
    category: '',
    initialDate: '',
    finalDate: '',
  });
  const [categories, setCategories] = useState([]);
  const [controllRender, setControllRender] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3333/tasks').then((res) => {
      setTasks(res.data);
    });
  }, [newTask, controllRender]);
  //console.log(tasks);

  useEffect(() => {
    axios.get('http://localhost:3333/category').then((res) => {
      setCategories(res.data);
    });
  }, []);

  function clear() {
    setNewTask({
      title: '',
      body: '',
      category: '',
      initialDate: '',
      finalDate: '',
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newTask.category || newTask.category === '0') {
      setShowErrorMessage(true);
      return;
    }

    axios.post('http://localhost:3333/tasks', newTask);

    setControllRender(!controllRender);
    setShowErrorMessage(false);
    setShowSuccessMessage(true);
    clear();
  };

  function deleteTask(id) {
    axios.delete(`http://localhost:3333/tasks/${id}`);
    setControllRender(!controllRender);
  }

  function handleChangeInput(event) {
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
    const { name, value } = event.target;
    const taskToAdd = {
      ...newTask,
      [name]: value,
    };

    setNewTask(taskToAdd);
  }

  return (
    <div id="container">
      <div className="app">
        <div id="headerApp">
          <h1>Agenda</h1>
        </div>
        <div id="bodyApp">
          <div id="left">
            <Form
              newTask={newTask}
              onChange={handleChangeInput}
              onSubmit={handleSubmit}
              categories={categories}
              showErrorMessage={showErrorMessage}
              showSuccessMessage={showSuccessMessage}
            />
          </div>

          <div id="right">
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                deleteTask={() => deleteTask(task.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
