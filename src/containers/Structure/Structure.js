import React from 'react'
import Half from '../../components/Half/Half'
import Container from '../../components/Container/Container'
import Form from '../../components/Form/Form'
import styles from './structure.module.css'


export default function Index() {
	return (
		<div className={styles.structure}>
			{/* GOOD (flat structure with main source of truth), Usually name [name]Container or [name]Page */}
			<Half background="blue">
				<p>Good</p>
				<Container>
					<Form>
						<input type='text' placeholder='example' />
						<input type='text' placeholder='example' />
						<input type='text' placeholder='example' />
						<input type='text' placeholder='example' />
						<input type='text' placeholder='example' />

						<input type='reset' placeholder='example' value="ångra" />
						<input type='submit' placeholder='example' value="skicka" />
					</Form>
				</Container>
			</Half>


			{/* BAD (tree structure) */}
			<Half background="red" />
		</div>
	)
}