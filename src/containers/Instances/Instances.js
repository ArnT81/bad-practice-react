import React, { useState } from 'react'
const set = new Set();
const set2 = new Set();


const ComponentOutsideOtherComponent = () => {
	set2.add(ComponentOutsideOtherComponent)
	return (
		<p>References {set2.size}</p>
	)
}


export default function Instances() {
	const [count, setCount] = useState(0);

	const ComponentWithinOtherComponent = () => {
		set.add(ComponentWithinOtherComponent)
		return (
			<p>References {set.size}</p>
		)
	}


	return (
		<div>Instances
			<button onClick={() => setCount(count + 1)}>Add</button>
			<button onClick={() => setCount(count - 1)}>Subtract</button>

			<p>{count}</p>

			<p>React creates multiple references to the component instead of replacing it on rerender </p>
			<ComponentWithinOtherComponent />
			<ComponentOutsideOtherComponent />
		</div>
	)
}