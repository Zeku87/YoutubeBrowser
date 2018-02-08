import React from 'react';
import ReactDOM from 'react-dom';
import youtube from 'youtube-api-search'
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyDb6ARrdbt2vkvvWHBxbKhYwCZarJQ-jg0';

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
			<VideoDetails video={this.state.videos[0]} />
			<VideoList videos={this.state.videos} />
		</div>
		);
	}
}

//Renderizando....
ReactDOM.render(<App/>, document.getElementById("container"));