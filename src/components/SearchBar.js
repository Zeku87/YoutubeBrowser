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
				<input value={this.state.term} onChange={this.onInputChange.bind(this)} /><button>Search</button>
				<br/>
				<p>{this.state.term}</p>
			</div>
			);

	}

	onInputChange(event){
		console.log(event.target.value);
		this.setState({term : event.target.value});
	}
}


/** Without classes **

const SearchBar = () => {
	return <input/>;
};

export default SearchBar;
*/