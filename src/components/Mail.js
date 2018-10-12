import React, { Component } from 'react';
//import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MailBox.css'
import TreeFolders from './TreeFolders';
//import Read from './Read'

export default class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAll: false,
            iconSelectAll: false,
            check: false,
        }
    }

    onSelectAll = () => {
        var checkboxes = document.getElementsByName('check');
        console.log(checkboxes)
        this.setState({
            selectAll: !this.state.selectAll,
            iconSelectAll: !this.state.iconSelectAll
        })
    }

    onSelect = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.checked ;
        this.setState({
            [name]: value
        })
        console.log(value)
    }

    render() {
        var { selectAll , iconSelectAll} = this.state;
        // console.log(iconSelectAll);
        // console.log(selectAll);
        return (
            <div className="container-fluid mailbox">
                <div style={{ float: 'right', marginRight: '20px' }} >admin</div>

                <div className="col-md-2">

                    <Link to="/mail/compose" className="btn btn-primary btn-block">Compose</Link>

                    <br />

                    <TreeFolders />
                </div>

                <div className="col-md-10">

                    <div className="mailbox-box mailbox-box-primary">

                        <div className="mailbox-box-header">

                            <h3 className="mailbox-box-title">Inbox</h3>

                            <div className="mailbox-box-tools pull-right flip">

                                <form className="form form-horizontal search-form">
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <i className="fa fa-search fa-btn"></i>
                                </form>

                            </div>

                        </div>

                        <div className="mailbox-box-body">

                            <div className="mailbox-controls">
                                <button className="btn btn-default btn-sm" type="button" onClick={this.onSelectAll}>
                                    <i className={iconSelectAll ? 'fa fa-check-square-o' : 'fa fa-square-o'}>
                                    </i>
                                </button>
                                <div className="btn-group">
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-trash-o">
                                        </i>
                                    </button>
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-reply">
                                        </i>
                                    </button>
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-share">
                                        </i>
                                    </button>
                                </div>
                                <button className="btn btn-default btn-sm" type="button">
                                    <i className="fa fa-refresh">
                                    </i>
                                </button>
                                <div className="pull-right flip">
                                    1-9/200
					            <div className="btn-group">
                                        <button className="btn btn-default btn-sm" type="button">
                                            <i className="fa fa-chevron-left">
                                            </i>
                                        </button>
                                        <button className="btn btn-default btn-sm" type="button">
                                            <i className="fa fa-chevron-right">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive mailbox-messages">
                                <table className="table table-hover table-striped">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="check" value={0} checked={selectAll}></input>
                                            </td>
                                            <td className="mailbox-star">
                                                <Link to="/inbox/a">
                                                    <i className="fa fa-star text-yellow">
                                                    </i>
                                                </Link>
                                            </td>
                                            <td className="mailbox-name">
                                                Moein Porkamel
                                            </td>
                                            <td className="mailbox-subject abc">
                                                <Link to="/mail/read" style={{ color: '#000' }} >
                                                    {/* {mailContent} */}
                                                    {/* <Read mailContent={mailContent} /> */}
                                                </Link>
                                            </td>
                                            <td className="mailbox-attachment">
                                            </td>
                                            <td className="mailbox-date">
                                                5 mins ago
					                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input 
                                                    type="checkbox" 
                                                    name="check" 
                                                    value={this.state.check}
                                                    checked={selectAll}
                                                    onChange={this.onSelect}
                                                    >
                                                </input>
                                            </td>
                                            <td className="mailbox-star">
                                                <Link to="/inbox/a">
                                                    <i className="fa fa-star-o text-yellow">
                                                    </i>
                                                </Link>
                                            </td>
                                            <td className="mailbox-name">
                                                <Link to="/mail/read">
                                                    Moein Porkamel
					                            </Link>
                                            </td>
                                            <td className="mailbox-subject">
                                                <b>
                                                    Congratulations!
					                            </b>
                                                - Investigations in the UK, Netherlands, and Canada have brought to light other potentially massive scandals involving Trump, his family, or his organisations. But prosecutors aren’t moving, possibly afraid of the furious response from Trump himself. If they did, their findings could fuel the US investigations, and give Congress evidence of Trump’s widespread corruption.					                        </td>
                                            <td className="mailbox-attachment">
                                                <i className="fa fa-paperclip">
                                                </i>
                                            </td>
                                            <td className="mailbox-date">
                                                28 mins ago
					                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="check" value={2} checked={selectAll}></input>
                                            </td>
                                            <td className="mailbox-star">
                                                <Link to="/inbox/a">
                                                    <i className="fa fa-star-o text-yellow">
                                                    </i>
                                                </Link>
                                            </td>
                                            <td className="mailbox-name">
                                                <Link to="/mail/read">
                                                    Moein Porkamel
					                            </Link>
                                            </td>
                                            <td className="mailbox-subject">
                                                <b>
                                                    Congratulations!
					                            </b>
                                                - Your event registration has been successful...
					                        </td>
                                            <td className="mailbox-attachment">
                                                <i className="fa fa-paperclip">
                                                </i>
                                            </td>
                                            <td className="mailbox-date">
                                                11 hours ago
					                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="check" value={3} checked={selectAll}></input>
                                            </td>
                                            <td className="mailbox-star">
                                                <Link to="/inbox/a">
                                                    <i className="fa fa-star text-yellow">
                                                    </i>
                                                </Link>
                                            </td>
                                            <td className="mailbox-name">
                                                <Link to="/mail/read">
                                                    Moein Porkamel
					                            </Link>
                                            </td>
                                            <td className="mailbox-subject">
                                                <b>
                                                    Congratulations!
					                            </b>
                                                - Your event registration has been successful...
					                        </td>
                                            <td className="mailbox-attachment">
                                            </td>
                                            <td className="mailbox-date">
                                                2 days ago
					                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="check" value={4} checked={selectAll}></input>
                                            </td>
                                            <td className="mailbox-star">
                                                <Link to="/inbox/a">
                                                    <i className="fa fa-star-o text-yellow">
                                                    </i>
                                                </Link>
                                            </td>
                                            <td className="mailbox-name">
                                                <Link to="/mail/read">
                                                    Moein Porkamel
					                            </Link>
                                            </td>
                                            <td className="mailbox-subject">
                                                <b>
                                                    Congratulations!
					                            </b>
                                                - Your event registration has been successful...
					                        </td>
                                            <td className="mailbox-attachment">
                                                <i className="fa fa-paperclip">
                                                </i>
                                            </td>
                                            <td className="mailbox-date">
                                                2 days ago
					                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="check" value={5} checked={selectAll}></input>
                                            </td>
                                            <td className="mailbox-star">
                                                <Link to="/inbox/a">
                                                    <i className="fa fa-star-o text-yellow">
                                                    </i>
                                                </Link>
                                            </td>
                                            <td className="mailbox-name">
                                                <Link to="/mail/read">
                                                    Moein Porkamel
					                            </Link>
                                            </td>
                                            <td className="mailbox-subject">
                                                <b>
                                                    Congratulations!
					                            </b>
                                                - Your event registration has been successful...
					                        </td>
                                            <td className="mailbox-attachment">
                                                <i className="fa fa-paperclip">
                                                </i>
                                            </td>
                                            <td className="mailbox-date">
                                                2 days ago
					                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="check" value={6} checked={selectAll}></input>
                                            </td>
                                            <td className="mailbox-star">
                                                <Link to="/inbox/a">
                                                    <i className="fa fa-star text-yellow">
                                                    </i>
                                                </Link>
                                            </td>
                                            <td className="mailbox-name">
                                                <Link to="/mail/read">
                                                    Moein Porkamel
					                            </Link>
                                            </td>
                                            <td className="mailbox-subject">
                                                <b>
                                                    Congratulations!
					                            </b>
                                                - Your event registration has been successful...
					                        </td>
                                            <td className="mailbox-attachment">
                                            </td>
                                            <td className="mailbox-date">
                                                1 week ago
					                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="check" value={7} checked={selectAll}></input>
                                            </td>
                                            <td className="mailbox-star">
                                                <Link to="/inbox/a">
                                                    <i className="fa fa-star-o text-yellow">
                                                    </i>
                                                </Link>
                                            </td>
                                            <td className="mailbox-name">
                                                <Link to="/mail/read">
                                                    Moein Porkamel
					                            </Link>
                                            </td>
                                            <td className="mailbox-subject">
                                                <b>
                                                    Congratulations!
					                            </b>
                                                - Your event registration has been successful...
					                        </td>
                                            <td className="mailbox-attachment">
                                                <i className="fa fa-paperclip">
                                                </i>
                                            </td>
                                            <td className="mailbox-date">
                                                1 month ago
					                        </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="check" value={8} checked={selectAll}></input>
                                            </td>
                                            <td className="mailbox-star">
                                                <Link to="/inbox/a">
                                                    <i className="fa fa-star-o text-yellow">
                                                    </i>
                                                </Link>
                                            </td>
                                            <td className="mailbox-name">
                                                <Link to="/mail/read">
                                                    Moein Porkamel
					                            </Link>
                                            </td>
                                            <td className="mailbox-subject">
                                                <b>
                                                    Congratulations!
					                            </b>
                                                - Your event registration has been successful...
					                        </td>
                                            <td className="mailbox-attachment">
                                                <i className="fa fa-paperclip">
                                                </i>
                                            </td>
                                            <td className="mailbox-date">
                                                1 month ago
					                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mailbox-controls">
                                <button className="btn btn-default btn-sm" type="button">
                                    <i className="fa fa-square-o">
                                    </i>
                                </button>
                                <div className="btn-group">
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-trash-o">
                                        </i>
                                    </button>
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-reply">
                                        </i>
                                    </button>
                                    <button className="btn btn-default btn-sm" type="button">
                                        <i className="fa fa-share">
                                        </i>
                                    </button>
                                </div>
                                <button className="btn btn-default btn-sm" type="button">
                                    <i className="fa fa-refresh">
                                    </i>
                                </button>
                                <div className="pull-right flip">
                                    1-9/200
					            <div className="btn-group">
                                        <button className="btn btn-default btn-sm" type="button">
                                            <i className="fa fa-chevron-left">
                                            </i>
                                        </button>
                                        <button className="btn btn-default btn-sm" type="button">
                                            <i className="fa fa-chevron-right">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}