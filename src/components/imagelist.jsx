import React from "react";
import { connect } from "react-redux";
import Popup from '../components/popup';
import { openpopup } from "../actions/index";


const mapStateToProps = (state, ownProps) => {
    return { applicationInfo: state.applicationInfo , activeTab: state.activeTab };
};

function mapDispatchToProps(dispatch) {
    return {
        openpopup: image => dispatch(openpopup(image))
    };
}


class ConnectedImageList extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                {
                    [...Array(12).keys()].map(key => (
                        <div key={key} className="child">
                            <img key={key} src={this.props.applicationInfo[key].imageSrc} onClick={() => this.props.openpopup(key)}></img>{
                                this.props.activeTab && (this.props.applicationInfo[key].name || this.props.applicationInfo[key].description)  ?
                                    <div className="imageDetails">
                                        <label>
                                            Name: {this.props.applicationInfo[key].name}
                                        </label>
                                        <br />
                                        <label>
                                            Description: {this.props.applicationInfo[key].description}
                                        </label>
                                    </div> : null
                            }
                            {
                                this.props.applicationInfo[key].showPopup && !this.props.activeTab? <Popup name={this.props.applicationInfo[key].name} description={this.props.applicationInfo[key].description} id={key} key={key}/> : <div></div>
                            }
                        </div>
                    ))
                }
            </>
        );
    }
}

const ImageList = connect(mapStateToProps, mapDispatchToProps)(ConnectedImageList);

export default ImageList;