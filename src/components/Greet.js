import React from 'react'

/*function Greet(){
	return <h1>hello Prayas</h1>;
}*/

export const Greet = (props) => {
	//console.log(props)
return (
	<div>
		<h1>
			hello {props.name} aka {props.heroName}
			- using JSX
			- functional component
		</h1>
		{props.children}
	</div>
)
}

export default Greet