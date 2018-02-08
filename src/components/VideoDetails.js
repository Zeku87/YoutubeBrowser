import React from 'react';
import ReactDOM from 'react-dom';

export default class VideoDetails extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			main_style:{
				textAlign: 'center',
			},
			video_style:{
				width: '80%',
				height: '350px'
			}
		};
	}


	setHTML(){
		console.log("VideoID: " + this.props.video.id.videoId);
		const url = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
		const videoDetailsHTML = (
			<div className="video-details" style={this.state.main_style}>
				<iframe className="video-details_video" src={url} style={this.state.video_style}></iframe>
				<p className="video-details_title">{this.props.video.snippet.title}</p>
				<p className="video-details_description">{this.props.video.snippet.description}</p>
			</div>
		);

		return videoDetailsHTML;
	}
	render(){

		if(typeof(this.props.video) == 'undefined')
			return (<div>Loading . . .</div>);
		else
			return this.setHTML();
	}
}