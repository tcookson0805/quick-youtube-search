import React from 'react';

import './search.css';

class Search extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			searchTerm: ''
		}

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(term) {
		this.setState({term: term});
		this.props.onSearchChange(term);
	}

	render() {

		return (
			<div>
				<input type="text" onChange={ (e) => this.onInputChange(e.target.value)}/>
			</div>
		)
	}
}

export default Search;