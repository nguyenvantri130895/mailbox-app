import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../MailBox.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'


class MailItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //selectAll: false,
            //iconSelectAll: false,
            //selectedEmails: new Set(),
            //check: false,
        }
    }

    // onSelectAll = () => {
    //     // var checkboxes = document.getElementsByName('check');
    //     // console.log(checkboxes)
    //     this.setState({
    //         check: !this.state.check,
    //         iconSelectAll: !this.state.iconSelectAll
    //     })
    //     this.onSelect(!this.state.checked, false)
    // }

    // onSelect = (allSelected, individualSelected, selectedEmail, checked) => {
    //     var checkboxes = document.getElementsByName('check');
    //     console.log(checkboxes.length);
    //     console.log('allSelected', allSelected)
    //     console.log('individualSelected', individualSelected)
    //     console.log('selectedEmail', selectedEmail)
    //     console.log('checked', checked)
    //     let selectedEmails = this.state.selectedEmails
    //     if (!allSelected && !individualSelected) {
    //         selectedEmails.clear()
    //     } else if (individualSelected) {
    //         if (checked) {
    //             selectedEmails.add(selectedEmail)
    //             if (selectedEmails.size === checkboxes.length) {
    //                 this.onSelectAll()
    //             }
    //         }
    //     }
    //     this.setState({ selectedEmails })
    //     console.log('selectedEmails', this.state.selectedEmails)
    //     console.log('check', this.state.check)

    //     // var target = e.target;
    //     // var name = target.name;
    //     // var value = target.checked;
    //     // this.setState({
    //     //     [name]: value
    //     // })
    //     // console.log(name + value)
    // }

    onClick = (id) => {
        this.props.onChangeIndex(id);
    }

    onDelete = (index) => {
        console.log('Delete ' + index)
    }

    render() {
        var { email, index } = this.props;
        var id = index + 1;
        var subString = email.substring(0);
        console.log(subString);
        return (
            <div className="table-responsive mailbox-messages">
                <table className="table table-hover table-striped">
                    <tbody>
                        <tr>
                            {/* <td>
                                <input
                                    type="checkbox"
                                    name="check"
                                // value={this.state.check}
                                // checked={this.state.check}
                                // onChange={(event) => {
                                //     this.onSelect(false,
                                //         true,
                                //         event.target.name,
                                //         event.target.checked
                                //     )
                                // }}
                                >
                                </input>
                            </td> */}
                            <td className="mailbox-star">
                                <Link to="/inbox/a">
                                    <i className="fa fa-star text-yellow">
                                    </i>
                                </Link>
                            </td>
                            <td className="mailbox-name">
                                Noname {id}
                            </td>
                            <td className="mailbox-subject">
                                <Link to={`/mail/${id}/read`} style={{ color: '#000' }} onClick={() => this.onClick(id)}>
                                    {email}
                                </Link>
                            </td>
                            <td className="mailbox-attachment">
                            </td>
                            <td className="mailbox-date">
                                {5 * (index + 1)} mins ago
					        </td>
                            <td>
                                <button 
                                    className="btn btn-danger btn-sm" 
                                    type="button"
                                    onClick={() => this.onDelete(index)}
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
        emails: state.emails
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeIndex: (id) => {
            dispatch(actions.changeIndex(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailItem)