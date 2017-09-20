import React from 'react';
import './header.css';

let Header = React.createClass({
	render() {
		return (
			<div className="components-header row">
				<img src={require('../static/images/logo.png')} width="40" className="-col-auto" />
				<h1 className="caption">React Music Player</h1>
			</div>
		);
	}
});

export default Header;