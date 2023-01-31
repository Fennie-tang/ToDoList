import React, { useRef } from 'react';
import './NewTodo.css';

type NewtodoProps = {
	onAddToDo: (todoText: string) => void;
};
const NewToDo: React.FC<NewtodoProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		props.onAddToDo(enteredText);
	};

	return (
		<form onSubmit={todoSubmitHandler}>
			<div className='form-control'>
				<label htmlFor='todo-text'> To Do List</label>
				<input type='text' id='todo-text' ref={textInputRef} />
			</div>
			<button type='submit'> Add To Do</button>
		</form>
	);
};

export default NewToDo;
