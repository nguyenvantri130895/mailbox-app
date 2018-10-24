import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../MailBox.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class DraftItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onClick = () => {
        this.props.onGetId(this.props.draft.id);
        this.props.onGetIndex(this.props.index);
    }

    onDelete = () => {
        this.props.onDelete(this.props.index);
    }

    render() {
        var { draft } = this.props;
        return (
            <div className="table-responsive draft-messages">
                <table className="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <td className="mailbox-name col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                {draft.composer}
                            </td>
                            <td className="mailbox-subject col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                <Link
                                    to={`/mail/${draft.id}/read`}
                                    style={{ color: '#000' }}
                                    onClick={this.onClick}
                                >
                                    {draft.subject} - {draft.content}
                                </Link>
                            </td>
                            <td className="mailbox-date col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                {draft.time} mins ago
					        </td>
                            <td className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
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
        drafts: state.drafts
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
        onDelete: (index) => {
            dispatch(actions.deleteDraft(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftItem)