import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import '../MailBox.css'
import TreeFolders from '../TreeFolders';
import MailList from './MailList';
import Read from '../Read'
import TrashList from '../Trash/TrashList'
import { connect } from 'react-redux'

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var { emails, id, trash, index } = this.props;
        const ComponentRendered = () => {
            switch (window.location.pathname) {
                case `/mail` || `/mail/`:
                    return <MailList />
                case `/mail/${id}/read` || `/mail/${id}/read/`:
                    return <Read emails={emails} trash={trash} id={id} index={index} />
                case `/mail/trash` || `/mail/trash/`:
                    return <TrashList/>
                default: return ''
            }

        }

        return (
            <div className="container-fluid mailbox">
                <div style={{ float: 'right', marginRight: '20px' }} ></div>

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
        trash: state.trash,
        id: state.id,
        index: state.index
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mail);