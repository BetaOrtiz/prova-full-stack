import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import axios from 'axios';
import './cardColors.css';
import './TasksArea.css';

const Task = ({ task, deleteTask }) => {
  const [notes, setNotes] = useState([]);
  const [showNote, setShowNote] = useState(false);
  const notesToShow = notes.filter((note) => note.task === task.id);
  const [newNote, setNewNote] = useState({ note: '', task: '' });

  useEffect(() => {
    axios.get('http://localhost:3333/notes').then((res) => {
      setNotes(res.data);
    });
  }, [newNote]);

  function handleNoteAdd(textNote, keyPressed, id) {
    setNewNote({
      note: textNote,
      task: id,
    });
    if (keyPressed === 13) {
      axios.post('http://localhost:3333/notes', newNote);
      setShowNote(false);
    }
  }

  function deleteNote(id) {
    axios.delete(`http://localhost:3333/notes/${id}`);
    setNewNote({ note: '', task: '' });
  }
  return (
    <div id="taskCard" key={task.id} className={task.category.toLowerCase()}>
      <div id="taskTitle" className={task.category.toLowerCase() + 'Title'}>
        <h2>{task.title}</h2>
        <div>
          <DeleteIcon onClick={deleteTask} />
        </div>
      </div>

      <div id="taskBody">{task.body}</div>

      <div id="category">
        <h6>Categoria</h6>
        <p>#{task.category.toLowerCase()}</p>
      </div>

      <div id="dates">
        <h6>Prazos</h6>
        <p>Início: {task.initialDate} </p>
        <p> Fim: {task.finalDate}</p>
      </div>

      <div id="reminder">
        <div id="reminderTitle">
          Lembretes
          <AddBoxIcon
            fontSize="small"
            color="disabled"
            onClick={() => setShowNote(!showNote)}
          />
        </div>

        {showNote === true ? (
          <textarea
            autoFocus
            onKeyUp={(event) =>
              handleNoteAdd(event.target.value, event.keyCode, task.id)
            }
            type="text"
          />
        ) : null}

        {notesToShow.map((note) => (
          <div id="notes" key={note.id}>
            {note.note}
            <IndeterminateCheckBoxIcon
              color="disabled"
              fontSize="small"
              onClick={() => deleteNote(note.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// const TaskTextArea = ({ onKeyUp }) => (
//   <textarea autoFocus onKeyUp={onKeyUp} type="text" />
// );

// const Note = ({ note, onClick }) => (
//   <div id="notes">
//     {note}
//     <IndeterminateCheckBoxIcon
//       color="disabled"
//       fontSize="small"
//       onClick={onClick}
//     />
//   </div>
// );

export default Task;
