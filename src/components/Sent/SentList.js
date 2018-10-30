import React, { Component } from 'react';
import SentItem from './SentItem';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Pagination from 'react-js-pagination'

class SentList extends Component {
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
        var { sent } = this.props;
        var { activePage, itemsCountPerPage } = this.state;

        const indexOfLastSentMail = itemsCountPerPage * activePage;
        const indexOfFirstSentMail = indexOfLastSentMail - itemsCountPerPage;
        const currentSentMails = sent.slice(indexOfFirstSentMail, indexOfLastSentMail);

        var renderItem = currentSentMails.map((sentMail, index) => {
            return (
                <SentItem
                    sentMail={sentMail}
                    key={sentMail.id}
                    index={index}
                />
            )
        })

        var renderList = () => {
            return (sent.length ?
                <div className="col-md-10">

                    <div className="mailbox-box mailbox-box-primary">

                        <div className="mailbox-box-header">

                            <h3 className="mailbox-box-title">Sent</h3>

                        </div>

                        <div className="mailbox-box-body">

                            {renderItem}

                        </div>
                        <div className="pull-right">
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={itemsCountPerPage}
                                totalItemsCount={sent.length}
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
                : <h4 className="text-center">No email to display in sent page</h4>
            )
        }

        return (
            renderList()
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sent: state.sent,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onShowList: () => {
            dispatch(actions.showListSent())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentList);