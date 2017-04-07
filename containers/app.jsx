import React from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import { changeText, toggleEdit } from '../actions';
import Preview from '../components/preview.jsx';
import Editor from '../components/editor.jsx';
import Header from '../components/header.jsx';
import CopyButtons from '../components/copy_buttons.jsx';

class App extends React.Component{
	display(visible){
		return { display: visible ? 'block' : 'none' };
	}
	render(){
		return (
			<div>
				<Header />
				<CopyButtons />
				<div>
					<Preview
						onClick={this.props.onClick}
						style={this.display(!this.props.editable)}
					>
						{this.props.text}
					</Preview>
					<Editor
						onChange={this.props.onChange}
						onBlur={this.props.onBlur}
						style={this.display(this.props.editable)}
						value={this.props.text}
					/>
				</div>
			</div>
		);
	}
};

App.propTypes = {
	text: React.PropTypes.string,
	editable: React.PropTypes.bool,
	onClick: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired,
	onBlur: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		text: state.text,
		editable: state.editable,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			var editable = true;
			dispatch(toggleEdit(editable));
		},
		onBlur: () => {
			var editable = false;
			dispatch(toggleEdit(editable));
		},
		onChange: (e) => {
			dispatch(changeText(e.target.value));
		},
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
