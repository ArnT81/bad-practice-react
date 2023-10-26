import React, { useEffect, useState } from 'react'


export default function ListWithStateOnTheList() {
	const [todos, setTodos] = useState();
	const [inputValue, setInputValue] = useState("");

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

	const handleChange = (e) => {
		setInputValue({ ...inputValue, [e.target.name]: e.target.value })
	}


	return (
		<div>
			<p>This <b>list rerenders</b> every time the value updates</p>
			{todos && todos.map((todo) => {
				console.log("happens");
				return (
					<div
						key={todo.id}
						style={{ padding: 10 }}
					>
						<input
							type='text'
							name={`todo${todo.id}`}
							placeholder={todo.title}
							value={inputValue[`todo${todo.id}`]}
							onChange={handleChange}
						/>
					</div>
				)
			})}
		</div >
	)
}
