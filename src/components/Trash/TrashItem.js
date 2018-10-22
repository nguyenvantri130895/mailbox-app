import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../MailBox.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class TrashItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onClick = () => {
        this.props.onGetId(this.props.emailTrash.id);
        this.props.onGetIndex(this.props.index);
    }

    onDelete = () => {
        this.props.onDelete(this.props.index);
    }

    onReturn = () => {
        this.props.onMoveToInbox(this.props.index);
    }

    render() {
        var { emailTrash, index } = this.props;
        return (
            <div className="table-responsive mailbox-messages">
                <table className="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <td className="mailbox-name">
                                Noname {index + 1}
                            </td>
                            <td className="mailbox-subject">
                                <Link 
                                    to={`/mail/${emailTrash.id}/read`} 
                                    style={{ color: '#000' }} 
                                    onClick={this.onClick}
                                >
                                    {emailTrash.content}
                                </Link>
                            </td>
                            <td className="mailbox-attachment">
                            </td>
                            <td className="mailbox-date">
                                {emailTrash.time} mins ago
					        </td>
                            <td>
                                <button
                                    className="btn btn-info btn-sm mr-10"
                                    type="button"
                                    onClick={this.onReturn}
                                >
                                    <i className="fa fa-undo"></i>
                                </button>
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
        trash: state.trash
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetId: (id) => {
            dispatch(actions.getId(id))
        },
        onGetIndex: (index) => {
            dispatch(actions.getIndex(index))
        },
        onMoveToInbox: (index) => {
            dispatch(actions.moveToInbox(index))
        },
        onDelete: (index) => {
            dispatch(actions.deletePermanently(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashItem)