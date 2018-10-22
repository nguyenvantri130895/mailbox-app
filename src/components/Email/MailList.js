import React, { Component } from 'react';
//import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap'
import '../MailBox.css'
import MailItem from './MailItem';
import { connect } from 'react-redux'
import MailControl from './MailControl';
import * as actions from '../../actions'

class MailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount = () => {
        this.props.onShowList()
    }

    render() {
        var { emails, sort, keyword } = this.props;

        if (sort.by === 'name') {
            emails.sort((a, b) => {
                if (a.composer.toLowerCase() > b.composer.toLowerCase()) return sort.value;
                else if (a.composer.toLowerCase() < b.composer.toLowerCase()) return -sort.value;
                else return 0;
            })
        } 
        else {
            emails.sort((a, b) => {
                if (a.time > b.time) return sort.value;
                else if (a.time < b.time) return -sort.value;
                else return 0;
            })
        }

        emails = emails.filter((email) => {
            return email.content.toLowerCase().indexOf(keyword) !== -1
        })
        var renderItem = emails.map((email, index) => {
            return (
                <MailItem
                    email={email}
                    key={email.id}
                    index={index}
                />
            )
        })

        var renderList = () => {
            return ( emails.length ? 
                <div className="col-md-10">
                    <div className="mailbox-box mailbox-box-primary">
                        <MailControl/>
                        <div className="mailbox-box-body">
                            {renderItem}
                        </div>
                    </div>
                </div> 
                : <h4 className="text-center">No email to display in inbox</h4>
            )}
        return (
            renderList()
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emails: state.emails,
        sort: state.sort,
        keyword: state.search
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onShowList: () => {
            dispatch(actions.showListEmail())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailList);