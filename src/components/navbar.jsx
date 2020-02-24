import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import { switchtab } from "../actions/index";
import { connect } from "react-redux";


function mapDispatchToProps(dispatch) {
    return {
        switchtab: (active) => dispatch(switchtab(active))
    };
}

class ConnectedNavbar extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
                <nav className="navSuperBolter">
                    <a onClick={() => this.props.switchtab(0)}>
                        Images Without Data
                    </a>
                    <a onClick={() => this.props.switchtab(1)}>
                        Images With Data
                    </a>
                    </nav>
        );
    }
}

const Navbar = connect(null, mapDispatchToProps)(ConnectedNavbar);
export default Navbar;
