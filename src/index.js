import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = '9e8fyA9s8dduDge5ioSDDug89RGeg3iou453tXg';


//Nuevo componente
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
}


//Renderizando....
ReactDOM.render(<App/>, document.getElementById("container"));