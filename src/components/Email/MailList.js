import React, { Component } from 'react';
//import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap'
import '../MailBox.css'
import MailItem from './MailItem';
import { connect } from 'react-redux'
import MailControl from './MailControl';
import * as actions from '../../actions'
import Pagination from 'react-js-pagination'

class MailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemsCountPerPage: 5
        }
    }

    componentWillMount = () => {
        this.props.onShowList()
    }

    onChangePage = (pageNumber) => {
        this.setState({
            activePage: pageNumber
        })
    }

    render() {
        var { emails, sort, keyword } = this.props;
        var { activePage, itemsCountPerPage } = this.state;
        if (sort.by === 'name') {
            emails.sort((a, b) => {
                if (a.id.toLowerCase() > b.id.toLowerCase()) return sort.value;
                else if (a.id.toLowerCase() < b.id.toLowerCase()) return -sort.value;
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
        const indexOfLastEmail = itemsCountPerPage * activePage;
        const indexOfFirstEmail = indexOfLastEmail - itemsCountPerPage;
        const currentEmails = emails.slice(indexOfFirstEmail, indexOfLastEmail);

        var renderItem = currentEmails.map((email, index) => {
            return (
                <MailItem
                    email={email}
                    key={email.id}
                    index={index}
                />
            )
        })

        var renderList = () => {
            return (emails.length ?
                <div className="mailbox-box-body">
                    {renderItem}

                </div>
                : <h4 className="text-center pb-30">No email to display in inbox</h4>
            )
        }
        return (
            <div className="col-md-10">
                <div className="mailbox-box mailbox-box-primary">
                    <MailControl />
                    <div className="mailbox-box-body">
                        {renderList()}
                    </div>
                    <div className="pull-right">
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={itemsCountPerPage}
                            totalItemsCount={emails.length}
                            pageRangeDisplayed={3}
                            onChange={this.onChangePage}
                            prevPageText="Previous"
                            lastPageText="Last"
                            firstPageText="First"
                            nextPageText="Next"
                        />
                    </div>
                </div>
            </div>
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