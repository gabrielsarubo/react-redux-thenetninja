import React from 'react'

const Ninjas = ({ ninjas, deleteNinja }) => {
	// const { ninjas } = props OR just destructure it right at arguments ( 'here' )
	// const { ninjas } = this.props wont work bc 'this' references an instance of a class

	// map() is a loop function
	const ninjaList = ninjas.map(ninja => {
		return (
			<div className="ninja" key={ninja.id}>
				<div>Name: {ninja.name}</div>
				<div>Age: {ninja.age}</div>
				<div>Belt: {ninja.belt}</div>
				<button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
			</div>
		)
	})

	return (
		<div className="ninja-list">
			{ninjaList}
		</div>
	)
}

export default Ninjas