import React, { useState } from 'react'

export default function Input({ i, placeholder }) {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		setInputValue({ ...inputValue, [e.target.name]: e.target.value })
	}

	return (
		<div>
			<input type='text'
				name={`user${i}`}
				placeholder={placeholder}
				value={inputValue[`user${i}`]}
				onChange={handleChange}
			/>
		</div>
	)
}