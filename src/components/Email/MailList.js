import React, { Component } from 'react';
//import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap'
import '../MailBox.css'
import MailItem from './MailItem';
import { connect } from 'react-redux'

class MailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //selectAll: false,
            //iconSelectAll: false,
            //selectedEmails: new Set(),
            //check: false,
        }
    }


    render() {
        var { emails } = this.props;
        //var { iconSelectAll } = this.state;
        var renderItem = emails.map((email, index) => {
            return (
                <MailItem
                    email={email}
                    key={index}
                    index={index}
                />
            )
        })
        return (

            <div className="col-md-10">

                <div className="mailbox-box mailbox-box-primary">

                    <div className="mailbox-box-header">

                        <h3 className="mailbox-box-title">Inbox</h3>

                        <div className="mailbox-box-tools pull-right flip">

                            <form className="form form-horizontal search-form">
                                <input type="text" className="form-control" placeholder="Search for..." />
                                <i className="fa fa-search fa-btn"></i>
                            </form>

                        </div>

                    </div>

                    <div className="mailbox-box-body">

                        {/* <div className="mailbox-controls">
                            <button className="btn btn-default btn-sm" type="button">
                                <i className={iconSelectAll ? 'fa fa-check-square-o' : 'fa fa-square-o'}>
                                </i>
                            </button>
                            <div className="btn-group">
                                <button className="btn btn-default btn-sm" type="button">
                                    <i className="fa fa-trash-o">
                                    </i>
                                </button>
                                <button className="btn btn-default btn-sm" type="button">
                                    <i className="fa fa-reply">
                                    </i>
                                </button>
                                <button className="btn btn-default btn-sm" type="button">
                                    <i className="fa fa-share">
                                    </i>
                                </button>
                            </div>
                            <button className="btn btn-default btn-sm" type="button">
                                <i className="fa fa-refresh">
                                </i>
                            </button>
                            <div className="pull-right flip">
                                1-9/200
					            <div className="btn-group">
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-chevron-left">
                                        </i>
                                    </button>
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-chevron-right">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div> */}

                        {renderItem}

                        {/* <div className="mailbox-controls">
                            <button className="btn btn-default btn-sm" type="button">
                                <i className="fa fa-square-o">
                                </i>
                            </button>
                            <div className="btn-group">
                                <button className="btn btn-default btn-sm" type="button">
                                    <i className="fa fa-trash-o">
                                    </i>
                                </button>
                                <button className="btn btn-default btn-sm" type="button">
                                    <i className="fa fa-reply">
                                    </i>
                                </button>
                                <button className="btn btn-default btn-sm" type="button">
                                    <i className="fa fa-share">
                                    </i>
                                </button>
                            </div>
                            <button className="btn btn-default btn-sm" type="button">
                                <i className="fa fa-refresh">
                                </i>
                            </button>
                            <div className="pull-right flip">
                                1-9/200
					            <div className="btn-group">
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-chevron-left">
                                        </i>
                                    </button>
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-chevron-right">
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emails: state.emails
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailList);