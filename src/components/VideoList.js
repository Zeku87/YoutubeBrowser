import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './VideoListItem';

export default class VideoList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			style: { 
				display:'flex', 
				justifyContent : 'center', 
				flexWrap: 'wrap'
			}
		};

	}


	mapVideos(){
		const videos = this.props.videos.map((videoObject) => {
			console.log(videoObject.id.video);
			return (<VideoListItem onVideoSelect={this.props.onVideoSelect} 
				key={videoObject.etag} 
				video={videoObject} />);
		});

		return videos;
	}

	render(){
		console.log(this.props.videos);

		let videos  = "Nothing to show";

		if(!typeof(this.props.videos) !== 'undefined' )
			videos = this.mapVideos();

		console.log("no debe ser undefined " + videos);

		return(
			<div className="video-list" style={this.state.style}>
				{videos}
			</div>
		);
	}
}