import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../MailBox.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class SentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onRead = () => {
        this.props.onRead(this.props.sentMail.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.sentMail.id);
    }

    render() {
        var { sentMail } = this.props;
        return (
            <div className="table-responsive mailbox-messages">
                <table className="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <td className="mailbox-name col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                To: {sentMail.receiver}
                            </td>
                            <td className="mailbox-subject col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                <Link
                                    to={`/mail/${sentMail.id}/read`}
                                    style={{ color: '#000' }}
                                    onClick={this.onRead}
                                >
                                    {sentMail.subject} - {sentMail.content}
                                </Link>
                            </td>
                            <td className="mailbox-date col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                {sentMail.time} mins ago
					        </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    type="button"
                                    onClick={this.onDelete}
                                >
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //sent: state.sent
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRead: (id) => {
            dispatch(actions.readSent(id))
        },
        onDelete: (id) => {
            dispatch(actions.deleteSent(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentItem)