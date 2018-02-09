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

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch("");

	}

	videoSearch(term) {
		youtube({key: API_KEY, term: term}, videos => {
			this.setState({ 
				videos:videos, 
				selectedVideo:videos[0] 
			});
		});
	}

	render(){
		return (
		<div>
			<SearchBar onSearch={ term => this.videoSearch(term)}/>
			<VideoDetails video={this.state.selectedVideo} />
			<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
				videos={this.state.videos} />
		</div>
		);
	}
}

//Renderizando....
ReactDOM.render(<App/>, document.getElementById("container"));