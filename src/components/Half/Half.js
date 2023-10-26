import React from 'react'
import Container from '../Container/Container'
import styles from './half.module.css'


export default function Half({ children, background }) {

	//GOOD
	if (children) {
		return (
			<div className={styles.half} style={{ background }}>
				{children}
			</div>
		)
	}

	else {
		//BAD
		return (
			<div className={styles.half} style={{ background }}>
				<p>Bad</p>
				<Container />
			</div>
		)
	}
}