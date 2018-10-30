import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Link } from 'react-router-dom'


class Compose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            composer: '',
            receiver: '',
            subject: '',
            //attachment: [],
            //fontWeight: false,
            disableComposer: false,
            disableReceiver: false,
        }
    }

    componentWillMount() {
        var { fromDraft, fromReply, fromForward } = this.props;
        console.log(fromForward);
        console.log(this.state.content);
        this.setState({
            receiver: fromDraft.receiver ? fromDraft.receiver : fromReply.composer,
            composer: fromForward.composer ? fromForward.composer : '',
            subject: fromDraft.subject ? fromDraft.subject : (fromReply.subject ? fromReply.subject : fromForward.subject),
            content: fromForward.content ? fromForward.content : fromDraft.content,
        }, fromForward.composer 
            ? (() => {}) 
            : (() => {
            if (!this.state.composer && !this.state.receiver) {
                this.setState({
                    disableReceiver: false,
                    disableComposer: false
                })
            } else if (this.state.composer) {
                this.setState({
                    disableReceiver: true
                })
            } else this.setState({
                disableComposer: true
            })
        }))

    }

    onSend = () => {
        if (!this.state.receiver) {
            alert('Please fill fully');

        }
        else {
            this.props.onSend(this.props.fromDraft.id, this.state.receiver, this.state.content, this.state.subject);
            window.location.pathname = '/mail/sent';

        }
    }

    onReceive = () => {
        if (!this.state.composer) {
            alert('Please fill fully');

        }
        else {
            this.props.onReceive(this.state.composer, this.state.content, this.state.subject);
            window.location.pathname = '/mail';

        }
    }

    onSave = () => {
        this.props.onSave(this.state.receiver, this.state.content, this.state.subject)
    }


    onChangeText = (event) => {
        var { fromForward } = this.props;
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        }, fromForward.composer 
            ? (() => {}) 
            : () => {
            if (!this.state.composer && !this.state.receiver) {
                this.setState({
                    disableReceiver: false,
                    disableComposer: false
                })
            } else if (this.state.composer) {
                this.setState({
                    disableReceiver: true
                })
            } else this.setState({
                disableComposer: true
            })
        })
    }

    // handleChange = () => {
    //     var input = document.getElementById('file-upload');
    //     var output = document.getElementById('file-name');
    //     var files = [];
    //     output.innerHTML = '<ol>';
    //     for (var i = 0; i < input.files.length; ++i) {
    //         output.innerHTML += '<li>' + input.files[i].name + '</li>';
    //         files.push(input.files[i])
    //     }
    //     output.innerHTML += '</ol>';

    //     this.setState({
    //         attachment: files
    //     })
    //     console.log(this.state.attachment);
    // }

    // onChangeStyle = (content) => {
    //     this.setState(prevState => ({
    //         //fontWeight: !this.state.fontWeight ? 'bold' : '' ,
    //         content: prevState.content + this.state.otherContent.bold()
    //     }))
    // }

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        var {disableComposer, disableReceiver} = this.state;
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

                            <form
                                className="mailbox-compose"
                                onSubmit={this.onSubmit}
                            >
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="From: "
                                        name="composer"
                                        value={this.state.composer}
                                        onChange={this.onChangeText}
                                        disabled={this.state.disableComposer}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="To: "
                                        name="receiver"
                                        value={this.state.receiver}
                                        onChange={this.onChangeText}
                                        disabled={this.state.disableReceiver}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Subject:"
                                        name="subject"
                                        value={this.state.subject}
                                        onChange={this.onChangeText}
                                    />
                                </div>

                                <div className="form-group">

                                    <div id="toolbar">
                                        <ul className="wysihtml5-toolbar">
                                            <li>
                                                <div className="btn-group">
                                                    <button
                                                        className="btn btn-default"
                                                        data-wysihtml5-command="bold"
                                                        tabIndex="-1"
                                                        title="CTRL+B"
                                                        unselectable="on"
                                                    //onClick={() => this.onChangeStyle(this.state.content)}
                                                    >
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

                                        </ul>
                                    </div>
                                    <textarea
                                        type="text"
                                        className="same-form-control"
                                        style={{
                                            height: '300px',
                                            width: '100%',
                                            maxWidth: '100%',
                                            fontSize: '14px',
                                            fontWeight: this.state.fontWeight
                                        }}
                                        name="content"
                                        value={this.state.content}
                                        onChange={this.onChangeText}
                                    >
                                    </textarea>
                                </div>

                                <div className="form-group">
                                    <label className="btn btn-primary btn-file">
                                        <i className="fa fa-paperclip mr-10"></i>
                                        Attachment
						                <input
                                            name="attachment"
                                            type="file"
                                            id="file-upload"
                                            className="hidden"
                                            multiple
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <div id='file-name'></div>

                                </div>

                            </form>

                        </div>
                        {/* <!-- Body --> */}

                        <div className="mailbox-box-footer">
                            <div className="pull-right">
                                <Link to="/mail/draft">
                                    <button
                                        className="btn btn-info mr-10"
                                        onClick={this.onSave}>
                                        <i className="fa fa-clipboard-list mr-10"></i>
                                        Draft
                                    </button>
                                </Link>
                                <button
                                    className="btn btn-success mr-10"
                                    onClick={this.onReceive}
                                    disabled={disableComposer || (!disableComposer && !disableReceiver) ? true : false}
                                >
                                    Receive
                                    <i className="fa fa-envelope-open-text ml-10"></i>
                                </button>
                                <button
                                    className="btn btn-success"
                                    onClick={this.onSend}
                                    disabled={disableReceiver ? true : false}
                                >
                                    Send
                                    <i className="fa fa-chevron-circle-right ml-10"></i>
                                </button>
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
        emails: state.emails,
        fromReply: state.reply,
        fromDraft: state.draftCompose,
        fromForward: state.forward
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSend: (id, receiver, text, subject) => {
            dispatch(actions.sendEmail(id, receiver, text, subject))
        },
        onReceive: (composer, text, subject) => {
            dispatch(actions.receiveEmail(composer, text, subject))
        },
        onSave: (receiver, content, subject) => {
            dispatch(actions.saveToDraft(receiver, content, subject))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compose);