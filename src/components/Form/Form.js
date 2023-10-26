import React from 'react'

import styles from './form.module.css'


export default function Form({ children }) {
	//GOOD
	if (children) {
		return (
			<div className={styles.form}>
				{children}
			</div>
		)
	}

	else {
		//BAD
		return (
			<div className={styles.form}>
				<form>
					<input type='text' placeholder='example' />
					<input type='text' placeholder='example' />
					<input type='text' placeholder='example' />
					<input type='text' placeholder='example' />
					<input type='text' placeholder='example' />

					<input type='reset' placeholder='example' value="ångra" />
					<input type='submit' placeholder='example' value="skicka" />
				</form>
			</div>
		)
	}
}