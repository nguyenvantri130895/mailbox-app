import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class TreeFolders extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="mailbox-box mailbox-box-solid">

                    <div className="mailbox-box-header">

                        <h3 className="mailbox-box-title">Folders</h3>

                    </div>

                    <div className="mailbox-box-body">

                        <ul className="vertical-list">

                            <li className="active"><Link to="/mail">
                                <i className="fa fa-inbox mr-10"></i>
                                Inbox
                                <span className="label label-primary pull-right flip">{this.props.emails.length}</span>
                            </Link></li>

                            <li className="active"><Link to="/mail">
                                <i className="fa fa-star mr-10"></i>
                                Starred inbox
                            </Link></li>

                            <li className="active"><Link to="/mail">
                                <i className="fa fa-envelope-o mr-10"></i>
                                Sent
                            </Link></li>

                            <li className="active"><Link to="/mail">
                                <i className="fa fa-file-text-o mr-10"></i>
                                Drafts
                                <span className="label label-warning pull-right flip">45</span>
                            </Link></li>

                            <li className="active"><Link to="/mail">
                                <i className="fa fa-question mr-10"></i>
                                Junk
                            </Link></li>

                            <li className="active"><Link to="/mail">
                                <i className="fa fa-trash mr-10"></i>
                                Trash
                                <span className="label label-danger pull-right flip">{this.props.emails.length}</span>
                            </Link></li>

                        </ul>

                    </div>

                </div>

                <div className="mailbox-box mailbox-box-solid">

                    <div className="mailbox-box-header">

                        <h3 className="mailbox-box-title">Labels</h3>

                    </div>

                    <div className="mailbox-box-body">

                        <ul className="vertical-list">

                            <li className="active"><Link to="/mail">
                                <i className="fa fa-exclamation mr-10"></i>
                                Important
                            </Link></li>

                            <li className="active"><Link to="/mail">
                                <i className="fa fa-gift mr-10"></i>
                                Promotions
                            </Link></li>

                            <li className="active"><Link to="/mail">
                                <i className="fa fa-facebook mr-10"></i>
                                Social
                            </Link></li>

                        </ul>

                    </div>

                </div>

            </div>


        );

    }
}

const mapStateToProps = (state) => {
    return {
        emails: state.emails,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeFolders);