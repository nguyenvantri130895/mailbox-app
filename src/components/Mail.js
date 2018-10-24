import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TreeFolders from './TreeFolders';
import MailList from './Email/MailList';
import Read from './Read/Read'
import TrashList from './Trash/TrashList'
import { connect } from 'react-redux'
import DraftList from './Draft/DraftList';

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var readMessage = JSON.parse(localStorage.getItem('readMessage')) ? JSON.parse(localStorage.getItem('readMessage')) : '';
        var id = readMessage.id;
        const ComponentRendered = () => {
            switch (window.location.pathname) {
                case `/mail`:
                    return <MailList />
                case `/mail/${id}/read`:
                    return <Read 
                                id={id} 
                                readMessage={readMessage}
                            />
                case `/mail/trash`:
                    return <TrashList />
                case `/mail/draft`:
                    return <DraftList />
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
        drafts: state.drafts,
        id: state.id,
        index: state.index,
        readMessage: state.readMessage
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mail);