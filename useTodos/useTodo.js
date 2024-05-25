import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodo = () => {
	const init = () => {
		return JSON.parse(localStorage.getItem('todos')) || [];
	};
	const initialState = [];

	const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleTodo = todo => {
		const action = {
			type: '[TODO] Add Todo',
			payload: todo,
		};
		dispatchTodo(action);
	};

	const handleDelete = id => {
		dispatchTodo({
			type: '[TODO] Remove Todo',
			payload: id,
		});
	};

	const handleToggleTodo = id => {
		dispatchTodo({
			type: '[TODO] Toggle Todo',
			payload: id,
		});
	};

	return {
		handleTodo,
		handleDelete,
		handleToggleTodo,
		pendingTodosCount: todos.filter(todo => todo.done === false).length,
		allTodosCount: todos.length,
		todos,
	};
};
