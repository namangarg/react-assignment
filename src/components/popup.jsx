import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { addNameDescription, closepopup} from "../actions/index";

const mapStateToProps = (state, ownProps) => {
    return { applicationInfo: state.applicationInfo };
};

function mapDispatchToProps(dispatch) {
    return {
        addNameDescription: image => dispatch(addNameDescription(image)),
        closepopup: image => dispatch(closepopup(image))
    };
}

class ConnectedPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            id:props.id
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const image = this.state;
        this.props.addNameDescription({ image });
        this.setState({ name: this.props.name});
        this.setState({ description: this.props.description});
        this.setState({ id: this.props.id})
        this.props.closepopup(this.props.id);

    }
    render() {
        const { name } = this.state.name;
        const { description } = this.state.description;
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div>
                    <a className="close" onClick={() => this.props.closepopup(this.props.id)}>&times;</a>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="Name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={this.handleChange}
                            />

                            <label htmlFor="Description">Description</label>
                            <textarea 
                                id="description"
                                value={description}
                                onChange={this.handleChange}>
                            </textarea>
                            <div style={{ textAlign: 'right' }}>
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const Popup = connect(mapStateToProps, mapDispatchToProps)(ConnectedPopup);

export default Popup;