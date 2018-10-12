import React, { Component } from 'react';
//import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap'
import './MailBox.css'
import TreeFolders from './TreeFolders';

class Read extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 'a'
        }
    }

    render() {
        // var { mailContent } = this.props;
        var mailContent = "- Your event registration has been successful trhgfhghhhhhhhhhhhghfhgfhgfhtrhgfhghhhhhhhhhhhghfhgfhgfasdasfadfsddddddddddddjkjkkjkkkddddddfsddddd dddddddddddddddddddddddddddddddddddddd ddddddddddddddddrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrddqwdwqdwdqwdqwdwdqwdqwdwddddddhtrhgfhgh hhhhhhhhhhghfhgfhgfh"
        return (
            <div className="container-fluid mailbox">

                <div className="col-md-2">

                    <a href="/mail" className="btn btn-primary btn-block">Back to Inbox</a>

                    <br />

                    <TreeFolders/>
                </div>
                {/* <!-- Sidebar --> */}

                <div className="col-md-10">

                    <div className="mailbox-box mailbox-box-primary">

                        <div className="mailbox-box-header">

                            <h3 className="mailbox-box-title">Read Mail</h3>

                            <div className="mailbox-box-tools pull-right flip">

                                <a href="/mail/read" className="btn btn-sm"><i className="fa fa-chevron-left"></i></a>
                                <a href="/mail/read" className="btn btn-sm"><i className="fa fa-chevron-right"></i></a>

                            </div>

                        </div>

                        <div className="mailbox-box-body">

                            <div className="mailbox-read-info">
                                <h3>
                                    Message Subject Is Placed Here
					            </h3>
                                <h5>
                                    From: tje3d@yahoo.com
					                <span className="mailbox-read-info-time pull-right flip">
                                        15 Feb. 2015 11:03 PM
					                </span>
                                </h5>
                            </div>
                            {/* <!-- Read Info --> */}

                            {/* <div className="mailbox-controls text-center">

                                <div className="btn-group">
                                    <button className="btn btn-default btn-sm" data-container="body" data-toggle="tooltip" title="Delete" type="button">
                                        <i className="fa fa-trash-o">
                                        </i>
                                    </button>
                                    <button className="btn btn-default btn-sm" data-container="body" data-toggle="tooltip" title="Reply" type="button">
                                        <i className="fa fa-reply">
                                        </i>
                                    </button>
                                    <button className="btn btn-default btn-sm" data-container="body" data-toggle="tooltip" title="Forward" type="button">
                                        <i className="fa fa-share">
                                        </i>
                                    </button>
                                </div>
                                <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Print" type="button">
                                    <i className="fa fa-print">
                                    </i>
                                </button>

                            </div> */}
                            {/* <!-- Controls --> */}

                            <div className="mailbox-read-message">
                                {mailContent}
                            </div>
                            {/* <!-- Read Message --> */}

                            <ul className="mailbox-attachment clearfix">

                                <li>
                                    <span className="mailbox-attachment-icon">
                                        <i className="fa fa-file-pdf-o">
                                        </i>
                                    </span>
                                    <div className="mailbox-attachment-info">
                                        <a className="mailbox-attachment-name" href="/mail/read">
                                            <i className="fa fa-paperclip mr-4">
                                            </i>
                                            Sep2014-report.pdf
					                    </a>
                                        <span className="mailbox-attachment-size">
                                            1,245 KB
					                <a className="btn btn-default btn-xs pull-right flip" href="/mail/read">
                                                <i className="fa fa-cloud-download">
                                                </i>
                                            </a>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <span className="mailbox-attachment-icon">
                                        <i className="fa fa-file-word-o">
                                        </i>
                                    </span>
                                    <div className="mailbox-attachment-info">
                                        <a className="mailbox-attachment-name" href="/mail/read">
                                            <i className="fa fa-paperclip mr-4">
                                            </i>
                                            App Description.docx
					                    </a>
                                        <span className="mailbox-attachment-size">
                                            1,245 KB
					                <a className="btn btn-default btn-xs pull-right flip" href="/mail/read">
                                                <i className="fa fa-cloud-download">
                                                </i>
                                            </a>
                                        </span>
                                    </div>
                                </li>

                                <li>
                                    <span className="mailbox-attachment-icon has-img">
                                        <img alt="Attachment" src="https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg" />
                                    </span>
                                    <div className="mailbox-attachment-info">
                                        <a className="mailbox-attachment-name" href="/mail/read">
                                            <i className="fa fa-camera">
                                            </i>
                                            photo2.png
					                    </a>
                                        <span className="mailbox-attachment-size">
                                            1.9 MB
					                        <a className="btn btn-default btn-xs pull-right flip" href="/mail/read">
                                                <i className="fa fa-cloud-download">
                                                </i>
                                            </a>
                                        </span>
                                    </div>
                                </li>

                            </ul>
                            {/* <!-- Attachments --> */}

                        </div>

                        <div className="mailbox-box-footer">
                            <div className="pull-right flip">
                                <button className="btn btn-default" type="button">
                                    Forward
                                    <i className="fa fa-share ml-10">
                                    </i>
                                </button>
                            </div>
                            <button className="btn btn-default" type="button">
                                <i className="fa fa-reply mr-10">
                                </i>
                                Reply
				            </button>
                        </div>

                    </div>
                    {/* <!-- End Box --> */}

                </div>

            </div>
        );
    }
}

export default Read