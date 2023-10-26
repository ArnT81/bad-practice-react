import React, { useEffect, useState } from 'react'
import Input from '../../components/Input/Input';


export default function ListWithoutStateOnTheList() {
	const [todos, setTodos] = useState();

	useEffect(() => {
		getTodos();
	}, [])

	const getTodos = () => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				if (response.ok) {
					return response.json();
				} throw new Error(response.statusText)
			})
			.then((response) => {
				setTodos(response);
			})
			.catch((error) => {
				console.log(`%c ${error}`, 'color: orange;');
			})
	}


	return (
		<div>
			<p>This list <b>does not</b> rerender every time the value updates</p>
			{todos && todos.map((todo) => {
				console.log('happens')
				return (
					<div
						key={todo.id}
						style={{ padding: 10 }}
					>
						<Input
							type='text'
							name={`todo${todo.id}`}
							placeholder={todo.title}
						/>
					</div>
				)
			})}
		</div >
	)
}