import React, { Component } from 'react';
//import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../MailBox.css'
import TreeFolders from '../TreeFolders';
import MailList from './MailList';
import Read from '../Read'
import Trash from '../Trash'
import { connect } from 'react-redux'

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var { emails, index } = this.props;
        const ComponentRendered = () => {
            switch (window.location.pathname) {
                // case '/mail' || '/mail/':
                //     return <MailList/>
                case `/mail/${index}/read` || `/mail/${index}/read/`:
                    return <Read emails={emails} index={index} />
                case `/mail/trash` || `/mail/trash/`:
                    return <Trash />
                default: return <MailList />
            }

        }

        return (
            <div className="container-fluid mailbox">
                <div style={{ float: 'right', marginRight: '20px' }} >admin</div>

                <div className="col-md-2">

                    <Link to="/mail/compose" className="btn btn-primary btn-block">Compose</Link>

                    <br />

                    <TreeFolders />
                </div>
                <div className="col-md-10">
                </div>
                <ComponentRendered />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emails: state.emails,
        index: state.index
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mail);