import React, { Component, PropTypes } from 'react'

class MyComponent extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// some logic here - we only test if the method is called
	}

	render() {
		return (
			<div className='my-component'>
				<i className='icon-test'></i>
				<i className='icon-test'></i>
				<i className='icon-test'></i>
				<button onClick={ this.props.handleClick } type='button'>Magic button!</button>
			</div>
		)
	}
}

MyComponent.propTypes = {
	handleClick: PropTypes.func.isRequired
}

export default MyComponent
