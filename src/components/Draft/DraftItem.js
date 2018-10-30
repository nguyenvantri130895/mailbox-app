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

    onDraftCompose = () => {
        this.props.onDraftCompose(this.props.draft.id, this.props.draft.receiver, this.props.draft.subject, this.props.draft.content);
    }

    onDelete = () => {
        this.props.onDelete(this.props.draft.id);
    }

    render() {
        var { draft } = this.props;
        return (
            <div className="table-responsive draft-messages">
                <table className="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <td className="mailbox-name col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                {draft.draft}
                            </td>
                            <td className="mailbox-subject col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                <Link
                                    to='/mail/compose'
                                    style={{ color: '#000' }}
                                    onClick={this.onDraftCompose}
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
        onDraftCompose: (id, receiver, subject, content) => {
            dispatch(actions.draft(id, receiver, subject, content))
        },
        onDelete: (id) => {
            dispatch(actions.deleteDraft(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftItem)