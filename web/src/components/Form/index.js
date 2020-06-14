import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import './style.css';
import Input from '../Input';
import TextArea from '../TextArea';
import SelectInput from '../SelectInput';
import DateInput from '../DateInput';

const Form = ({
  newTask,
  onSubmit,
  onChange,
  categories,
  showSuccessMessage,
  showErrorMessage,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        autoFocus
        id="titleTask"
        title="Título*"
        value={newTask.title}
        onChange={onChange}
        name="title"
      />
      <TextArea
        title="Tarefa*"
        value={newTask.body}
        onChange={onChange}
        name="body"
      />
      <SelectInput
        title="Categorias*"
        name="category"
        onChange={onChange}
        optionsList={categories}
      />
      <DateInput
        initialDate={newTask.initialDate}
        finalDate={newTask.finalDate}
        onChange={onChange}
      />
      <Button type="submit">Enter</Button>
      <Alert
        variant="success"
        style={{ display: showSuccessMessage ? 'block' : 'none' }}
      >
        Tarefa adicionada com sucesso!
      </Alert>
      <Alert
        variant="danger"
        style={{ display: showErrorMessage ? 'block' : 'none' }}
      >
        *Campos obrigatórios.
      </Alert>
    </form>
  );
};

export default Form;
