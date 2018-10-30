import React, { Component } from 'react';
import '../MailBox.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Read extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {

    }

    onReply = () => {
        this.props.onReply(this.props.readMessage.composer, this.props.readMessage.subject)
    }

    onForward = () => {
        var { readMessage } = this.props;
        console.log(readMessage.content)
        this.props.onForward(readMessage.composer, readMessage.subject, readMessage.content)
    }

    render() {
        var { readMessage } = this.props;
        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var hours = d.getHours();
        var min = d.getMinutes();
        min = (min < 10) ? ('0' + min) : min
        const now = date + "/" + month + "/" + year + " - " + hours + ":" + min
        return (
            <div className="container-fluid mailbox">

                <div className="col-md-10">

                    <div className="mailbox-box mailbox-box-primary">

                        <div className="mailbox-box-header">
                            <span className="mailbox-read-info-time pull-right flip">
                                {now}
                            </span>

                            <h3 className="mailbox-box-title">Read Mail</h3>

                        </div>

                        <div className="mailbox-box-body">

                            <div className="mailbox-read-info">
                                <h3>
                                    {readMessage.subject}
                                </h3>
                                <h4>
                                    {!readMessage.composer                          // check if not composer
                                        ? `To: ${readMessage.receiver}`           // read email in sent
                                        : (readMessage.composer === 'Draft'       // if composer and composer = 'Draft'
                                            ? readMessage.composer              // read email in draft
                                            : `From: ${readMessage.composer}`   // read email in inbox
                                        )
                                    }
                                </h4>
                            </div>
                            {/* <!-- Read Info --> */}

                            <div className="mailbox-read-message">
                                {readMessage.content}
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
                                                <i className="fa fa-cloud-download-alt">
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
                                                <i className="fa fa-cloud-download-alt">
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
                                                <i className="fa fa-cloud-download-alt">
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
                                <Link to="/mail/compose">
                                    <button
                                        className="btn btn-default"
                                        type="button"
                                        onClick={this.onForward}
                                    >
                                        Forward
                                    <i className="far fa-hand-point-right ml-10">
                                        </i>
                                    </button>
                                </Link>
                            </div>
                            <Link to="/mail/compose">
                                <button
                                    className="btn btn-default"
                                    type="button"
                                    onClick={this.onReply}
                                >
                                    <i className="fa fa-reply mr-10">
                                    </i>
                                    Reply
				            </button>
                            </Link>

                        </div>

                    </div>
                    {/* <!-- End Box --> */}

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onReply: (composer, subject) => {
            dispatch(actions.reply(composer, subject))
        },
        onForward: (composer, subject, content) => {
            dispatch(actions.forward(composer, subject, content))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Read);