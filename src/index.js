import React from 'react';
import ReactDOM from 'react-dom';
import youtube from 'youtube-api-search'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'API_KEY';

//Nuevo componente
class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {videos: []};

		youtube({key: API_KEY, term: "Avril Lavigne"}, videos => {
			this.setState({ videos }); // videos:videos
			console.log(this.state.videos);
		});
	}

	render(){
		return (
		<div>
			<SearchBar />
			<VideoList videos={this.state.videos}/>
		</div>
		);
	}
}

//Renderizando....
ReactDOM.render(<App/>, document.getElementById("container"));