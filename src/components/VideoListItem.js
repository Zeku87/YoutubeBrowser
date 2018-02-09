import React from 'react';
import ReactDOM from 'react-dom';


export default class VideoListItem extends React.Component{
	constructor(props){
		super(props);

		this.state = { 
			thumbnailUrl : this.props.video.snippet.thumbnails.default.url,
			title : this.props.video.snippet.title,
			style: { 
				backgroundColor: '#333', 
				maxWidth: '160px', 
				color: 'white', 
				display: 'inline-block', 
				padding: '10px', 
				margin:'10px', 
				borderRadius: '15px',
				textAlign: 'center'
			}
		};
	}

	render(){

		console.log(this.state.thumbUrl);

		return (
			<div className="video-list-item" style={this.state.style}>
				<img 
				onClick={ () => this.props.onVideoSelect(this.props.video)} 
				className="video-list-item_thumbnail" 
				src={this.state.thumbnailUrl}/>
				<p className="video-list-item_title">{this.state.title}</p>
			</div>
		);
	}
}