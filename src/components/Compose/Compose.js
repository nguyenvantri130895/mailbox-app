import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import createHistory from 'history/createBrowserHistory'
import { Link } from 'react-router-dom'

const history = createHistory();

class Compose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            composer: '',
            subject: ''
        }
    }

    onSend = () => {
        this.props.onSend(this.state.composer, this.state.content, this.state.subject)
    }

    onSave = () => {
        this.props.onSave(this.state.content, this.state.subject)
    }


    onChangeText = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
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
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="From:"
                                        name="composer"
                                        onChange={this.onChangeText}
                                    />
                                </div>

                                <div className="form-group">
                                    <input 
                                        className="form-control" 
                                        type="text" 
                                        placeholder="Subject:" 
                                        name="subject"
                                        onChange={this.onChangeText}
                                    />
                                </div>

                                <div className="form-group">

                                    <div id="toolbar">
                                        <ul className="wysihtml5-toolbar">
                                            <li>
                                                <div className="btn-group">
                                                    <button className="btn btn-default" data-wysihtml5-command="bold" tabIndex="-1" title="CTRL+B" unselectable="on">
                                                        <b>Bold</b>
                                                    </button>
                                                    <button className="btn btn-default" data-wysihtml5-command="italic" tabIndex="-1" title="CTRL+I" unselectable="on">
                                                        <i>Italic</i>
                                                    </button>
                                                    <button className="btn btn-default wysihtml5-command-active" data-wysihtml5-command="underline" tabIndex="-1" title="CTRL+U" unselectable="on">
                                                        <u>Underline</u>
                                                    </button>
                                                    <button className="btn btn-default" data-wysihtml5-command="small" tabIndex="-1" title="CTRL+S" unselectable="on">
                                                        <small>Small</small>
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <button className="btn btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote" data-wysihtml5-display-format-name="false" tabIndex="-1" unselectable="on">
                                                    <span className="fa fa-quote-left">
                                                    </span>  <span className="fa fa-quote-right">
                                                    </span>
                                                </button>
                                            </li>
                                            <li>
                                                <div className="btn-group">
                                                    <button className="btn btn-default" data-wysihtml5-command="insertUnorderedList" tabIndex="-1" title="Unordered list" unselectable="on">
                                                        <span className="glyphicon glyphicon-list">
                                                        </span>
                                                    </button>
                                                    <button className="btn btn-default" data-wysihtml5-command="insertOrderedList" tabIndex="-1" title="Ordered list" unselectable="on">
                                                        <span className="glyphicon glyphicon-th-list">
                                                        </span>
                                                    </button>
                                                    <button className="btn btn-default" data-wysihtml5-command="Outdent" tabIndex="-1" title="Outdent" unselectable="on">
                                                        <span className="glyphicon glyphicon-indent-right">
                                                        </span>
                                                    </button>
                                                    <button className="btn btn-default" data-wysihtml5-command="Indent" tabIndex="-1" title="Indent" unselectable="on">
                                                        <span className="glyphicon glyphicon-indent-left">
                                                        </span>
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <textarea
                                        type="text"
                                        className="same-form-control"
                                        style={{
                                            height: '300px',
                                            width: '100%',
                                            maxWidth: '100%',
                                            fontSize: '14px'
                                        }}
                                        name="content"
                                        onChange={this.onChangeText}
                                    />

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
                                <Link to="/mail/draft">
                                    <button className="btn btn-info mr-10" onClick={this.onSave}>
                                        <i className="fa fa-clipboard-list mr-10"></i>
                                        Draft
                                </button>
                                </Link>
                                <Link to="/mail">
                                    <button className="btn btn-success" onClick={this.onSend}>
                                        Send
                                    <i className="fa fa-chevron-circle-right ml-10"></i>
                                    </button>
                                </Link>
                            </div>
                            <Link to="/mail">
                                <button className="btn btn-danger" type="reset">
                                    <i className="fa fa-times-circle mr-10"></i>
                                    Discard
				            </button>
                            </Link>
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

const mapStateToProps = (state) => {
    return {
        emails: state.emails
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSend: (sender, text, subject) => {
            dispatch(actions.sendEmail(sender, text, subject))
        },
        onSave: (text, subject) => {
            dispatch(actions.saveToDraft(text, subject))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compose);