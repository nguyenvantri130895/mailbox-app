import React, { Component } from 'react';
//import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap'
import './MailBox.css'

export default class Compose extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container-fluid mailbox">

                <div className="col-md-2">

                    <a href="/mail" className="btn btn-primary btn-block">Back to Inbox</a>

                    <br />

                </div>
                {/* <!-- Sidebar --> */}

                <div className="col-md-10">

                    <div className="mailbox-box mailbox-box-primary">

                        <div className="mailbox-box-header">

                            <h3 className="mailbox-box-title">Compose New Message</h3>

                        </div>

                        <div className="mailbox-box-body">

                            <form className="mailbox-compose">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="To:" />
                                </div>

                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Subject:" />
                                </div>

                                <div className="form-group">

                                    <div id="toolbar">
                                        <ul className="wysihtml5-toolbar">
                                            <li>
                                                <div className="btn-group">
                                                    <a className="btn btn-default" data-wysihtml5-command="bold" href="/mail/compose" tabIndex="-1" title="CTRL+B" unselectable="on">
                                                        <b>Bold</b>
                                                    </a>
                                                    <a className="btn btn-default" data-wysihtml5-command="italic" href="/mail/compose" tabIndex="-1" title="CTRL+I" unselectable="on">
                                                        <i>Italic</i>
                                                    </a>
                                                    <a className="btn btn-default wysihtml5-command-active" data-wysihtml5-command="underline" href="/mail/compose" tabIndex="-1" title="CTRL+U" unselectable="on">
                                                        <u>Underline</u>
                                                    </a>
                                                    <a className="btn btn-default" data-wysihtml5-command="small" href="/mail/compose" tabIndex="-1" title="CTRL+S" unselectable="on">
                                                        <small>Small</small>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="btn btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote" data-wysihtml5-display-format-name="false" href="/mail/compose" tabIndex="-1" unselectable="on">
                                                    <span className="fa fa-quote-left">
                                                    </span>  <span className="fa fa-quote-right">
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="btn-group">
                                                    <a className="btn btn-default" data-wysihtml5-command="insertUnorderedList" href="/mail/compose" tabIndex="-1" title="Unordered list" unselectable="on">
                                                        <span className="glyphicon glyphicon-list">
                                                        </span>
                                                    </a>
                                                    <a className="btn btn-default" data-wysihtml5-command="insertOrderedList" href="/mail/compose" tabIndex="-1" title="Ordered list" unselectable="on">
                                                        <span className="glyphicon glyphicon-th-list">
                                                        </span>
                                                    </a>
                                                    <a className="btn btn-default" data-wysihtml5-command="Outdent" href="/mail/compose" tabIndex="-1" title="Outdent" unselectable="on">
                                                        <span className="glyphicon glyphicon-indent-right">
                                                        </span>
                                                    </a>
                                                    <a className="btn btn-default" data-wysihtml5-command="Indent" href="/mail/compose" tabIndex="-1" title="Indent" unselectable="on">
                                                        <span className="glyphicon glyphicon-indent-left">
                                                        </span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <textarea className="same-form-control" style={{ height: '300px', width: '100%', maxWidth: '100%', fontSize: '14px' }} />

                                </div>

                                <div className="form-group">
                                    <label className="btn btn-primary btn-file">
                                        <i className="fa fa-paperclip mr-10"></i>
                                        Attachment
						                <input name="attachment" type="file" className="hidden" />
                                    </label>
                                    <p className="help-block">
                                        Max. 32MB
						            </p>
                                </div>

                            </form>

                        </div>
                        {/* <!-- Body --> */}

                        <div className="mailbox-box-footer">
                            <div className="pull-right">
                                <button className="btn btn-info mr-10">
                                    <i className="fa fa-file-text-o mr-10"></i>
                                    Draft
                                </button>
                                <button className="btn btn-success">
                                    Send
                                    <i className="fa fa-chevron-circle-right ml-10"></i>
                                </button>
                            </div>
                            <button className="btn btn-danger" type="reset">
                                <i className="fa fa-times-circle mr-10"></i>
                                Discard
				            </button>
                        </div>
                        {/* <!-- Footer --> */}

                    </div>
                    {/* <!-- End Box --> */}

                </div>
                {/* <!-- Content --> */}

            </div>
        );
    }
}