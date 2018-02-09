import React from 'react';

export default class SearchBar extends React.Component{
	constructor(props){
		super(props);


		this.state = { 
			term: "",
			style :{
				textAlign : 'center'
			}
		};
				
	}

	render () {
		return (
			<div className="search-bar" style={this.state.style}>
				<input value={this.state.term} 
					   onChange={this.onInputChange.bind(this)} />
				<button onClick={() => this.props.onSearch(this.state.term)}>Search</button>
				<br/>
			</div>
			);

	}

	onInputChange(event){
		this.setState({term : event.target.value});
	}
}