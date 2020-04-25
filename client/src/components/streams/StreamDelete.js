import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
class StreamDelete extends React.Component {
	componentDidMount() {
		fetchStream(this.props.match.params.id);
	}
	renderActions = () => {
		const { id } = this.props.match.params;
		return (
			<React.Fragment>
				<button onClick={() => this.props.deleteStream(id)} className="ui button negative">
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	};
	renderContent() {
		if (!this.props.stream) {
			return "Are you sure you want to delete this stream?";
		}
		return `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`;
	}
	render() {
		return (
			<Modal
				onDismiss={() => history.push("/")}
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
			/>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
