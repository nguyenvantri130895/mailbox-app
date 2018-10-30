import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TreeFolders from './TreeFolders';
import InboxList from './Inbox/InboxList';
import Read from './Read/Read'
import TrashList from './Trash/TrashList'
import { connect } from 'react-redux'
import DraftList from './Draft/DraftList';
import SentList from './Sent/SentList';

class Mail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        // window.location.pathname ='/mail'
    }

    render() {
        var readMessage = JSON.parse(localStorage.getItem('readMessage')) ? JSON.parse(localStorage.getItem('readMessage')) : '';
        var id = readMessage.id;
        const ComponentRendered = () => {
            switch (window.location.pathname) {
                case `/mail`:
                    return <InboxList />
                case `/mail/${id}/read`:
                    return <Read
                        readMessage={readMessage}
                    />
                case `/mail/trash`:
                    return <TrashList />
                case `/mail/draft`:
                    return <DraftList />
                case `/mail/sent`:
                    return <SentList />
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
        readMessage: state.readMessage,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mail);