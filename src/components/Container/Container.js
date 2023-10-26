import React from 'react'
import Form from '../Form/Form'
import styles from './container.module.css'


export default function Container({ children, display }) {
	//GOOD
	if (children) {
		return (
			<div className={styles.container} style={{display}}>
				{children}
			</div>
		)
	}

	else {
		//BAD
		return (
			<div className={styles.container}>
				<Form />
			</div>
		)
	}
}
