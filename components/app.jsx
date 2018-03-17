import React from 'react';
import Header from './header.jsx';
import TextField from '../containers/textfield.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<TextField />
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		lines: state.lines,
		editable: state.editable,
	};
};

module.exports = App;